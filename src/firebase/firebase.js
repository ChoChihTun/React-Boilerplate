// Import ALL the named export into firebase. Access named export with firebase.METHOD
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// Initialise firebase to work with
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// Allow user to select account
googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
});

export { firebase, googleAuthProvider, database as default };
