// source:
// saving user settings: https://www.youtube.com/watch?v=fJPJXYA36JI
// github: https://github.com/TaylorRayHoward/FirebaseUserExample

// import * as firebase from 'firebase';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAOEXILaYcxjmJsJ81_WfubS_h3AQ3lLdA",
  authDomain: "green-comet-e2c85.firebaseapp.com",
  databaseURL: "https://green-comet-e2c85.firebaseio.com/",
  projectId: "green-comet-e2c85",
  storageBucket: "green-comet-e2c85.appspot.com",
  // messagingSenderId: "410302103395",
};

firebase.initializeApp(config);

// firebase-app — The core firebase client (required)

// firebase-auth — Firebase Authentication (optional)
export const auth = firebase.auth();

// firebase-database — Firebase Realtime Database (optional)
export const database = firebase.database();

// firebase-firestore — Cloud Firestore (optional)
// export const firestore = firebase.firestore()

// firebase-storage — Cloud Storage (optional)
export const storage = firebase.storage().ref();

// firebase-messaging — Firebase Cloud Messaging (optional)
// export const messaging = firebase.messaging();

// firebase-functions — Cloud Functions for Firebase (optional)
// export const functions = firebase.functions();


