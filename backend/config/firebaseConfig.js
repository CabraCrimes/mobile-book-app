const admin = require("firebase-admin");
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const serviceAccountPath = path.join(__dirname, process.env.ACCOUNT_KEY_PATH);
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseDB = admin.firestore();

module.exports = firebaseDB;