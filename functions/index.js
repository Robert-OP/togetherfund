/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyChHO0rITHaBGM2NeniQyySBBqdfrloZaY",
  authDomain: "togetherfund-2fb98.firebaseapp.com",
  projectId: "togetherfund-2fb98",
  storageBucket: "togetherfund-2fb98.appspot.com",
  messagingSenderId: "974166966631",
  appId: "1:974166966631:web:5e1ea9f8f03ce0a6786fc2",
  measurementId: "G-KVPWKMR433",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const {onRequest} = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const { initializeApp } = require("firebase-admin");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started




exports.sendDonationRequest = onRequest( async (request, response) => {
  initializeApp();
  const db = getFirestore();

  const docRef = db.collection("users").doc("alovelace");

  await docRef.set({
    ...request.body
  });

  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
