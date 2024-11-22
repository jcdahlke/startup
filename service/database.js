const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('rgb');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });
  
  function getUser(username) {
    return userCollection.findOne({ username }, { projection: { username: 1, highScore: 1, password: 1 } } );
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
        highScore: 0, // Initialize high score to 0
    };
    await userCollection.insertOne(user);

    return user;
}

  
async function updateUserToken(username, token) {
    await userCollection.updateOne({ username }, { $set: { token } });
}

async function removeUserToken(token) {
    await userCollection.updateOne({ token }, { $unset: { token: "" } });
}

async function addScore(username, score) {
    const currentDate = new Date().toISOString(); // Capture the current date
    await scoreCollection.insertOne({ username, score, date: currentDate }); // Include date

    // Check if the high score needs to be updated
    await updateHighScore(username, score);
}
  
function getHighScores() {
    const query = { score: { $gt: 0, $lt: 900 } };
    const options = {
        sort: { score: -1 },
        limit: 10,
        projection: { username: 1, score: 1, date: 1 }, // Include the date field
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
}

  
  async function updateHighScore(username, newScore) {
    const user = await getUser(username);
    if (!user) throw new Error('User not found');

    if (newScore > user.highScore) {
        await userCollection.updateOne(
            { username: username },
            { $set: { highScore: newScore } }
        );
    }
}
  module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addScore,
    getHighScores,
    updateUserToken,
    removeUserToken,
    updateHighScore
  };