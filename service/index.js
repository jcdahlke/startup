const express = require('express');
const { getUser, getUserByToken, createUser, addScore, getHighScores } = require('./db'); // Import MongoDB functions
const bcrypt = require('bcrypt'); // For secure password comparison
const uuid = require('uuid');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth: Register a new user
apiRouter.post('/auth/create', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await getUser(username);

    if (existingUser) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await createUser(username, password); // Use MongoDB logic to create user
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
    const user = await getUser(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = uuid.v4(); // Generate a new token
      user.token = token; // Update token in the database
      await userCollection.updateOne({ username }, { $set: { token } }); // Update token in MongoDB
      res.send({ token });
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
  const token = req.headers.authorization?.split(' ')[1]; // Token passed as Bearer <token>
  if (!token) return res.status(401).send({ msg: 'Unauthorized' });

  try {
    const user = await getUserByToken(token); // Use MongoDB logic to find user by token
    if (user) {
      res.send({ username: user.username });
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
  const token = req.body.token;
  if (!token) return res.status(400).send({ msg: 'Token required' });

  try {
    const user = await getUserByToken(token);
    if (user) {
      await userCollection.updateOne({ token }, { $unset: { token: "" } }); // Remove token in MongoDB
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// GetScores: Fetch high scores
apiRouter.get('/scores', async (_req, res) => {
  try {
    const highScores = await getHighScores(); // Fetch high scores from MongoDB
    res.send(highScores);
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// SubmitScore: Add a new score
apiRouter.post('/score', async (req, res) => {
  try {
    const newScore = req.body;
    await addScore(newScore); // Add score to MongoDB
    const highScores = await getHighScores(); // Get updated high scores
    res.send(highScores);
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
