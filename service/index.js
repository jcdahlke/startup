const express = require('express');
const DB = require('./database.js'); // Import MongoDB functions
const bcrypt = require('bcrypt'); // For secure password comparison
const uuid = require('uuid');
const app = express();
const cookieParser = require('cookie-parser');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());
app.use(cookieParser()); // Ensure this is added to parse cookies

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth: Register a new user
apiRouter.post('/auth/create', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await DB.getUser(username);

    if (existingUser) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(username, password); // Use MongoDB logic to create user
      res.send({ token: user.token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// GetAuth: Login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await DB.getUser(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = uuid.v4(); // Generate a new token
      await DB.updateUserToken(username, token); // Update the token in MongoDB

      // Set token as a cookie
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

      // Send high score along with the success message
      res.send({ msg: 'Login successful', highScore: user.highScore });
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});


// GetAuth username (new endpoint to get the current user's username)
apiRouter.get('/auth/username', async (req, res) => {
  const token = req.cookies.token; // Retrieve token from cookies
  if (!token) return res.status(401).send({ msg: 'Unauthorized' });

  try {
    const user = await DB.getUserByToken(token); // Use MongoDB logic to find user by token
    if (user) {
      res.send({ username: user.username, highScore: user.highScore });
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});


// DeleteAuth: Logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const token = req.cookies.token; // Get token from cookie
  if (!token) return res.status(400).send({ msg: 'Token required' });

  try {
    const user = await DB.getUserByToken(token);
    if (user) {
      // Remove the token from MongoDB
      await DB.removeUserToken(token);
    }
    // Clear the token cookie
    res.clearCookie('token');
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// GetScores: Fetch high scores
apiRouter.get('/scores', async (_req, res) => {
  try {
    const highScores = await DB.getHighScores(); // Fetch high scores from MongoDB
    res.send(highScores);
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// SubmitScore: Add a new score
apiRouter.post('/score', async (req, res) => {
  try {
    const { username, score } = req.body;
    await DB.addScore(username, score); // Add score to MongoDB
    const user = await DB.getUser(username); // Get the updated user data
    const highScores = await DB.getHighScores(); // Get updated high scores

    res.send({ highScores, userHighScore: user.highScore }); // Include user's high score in the response
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
