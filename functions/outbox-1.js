exports.exec = exec;
// Reference: https://www.youtube.com/watch?v=tResEeK6P5I | alone-together.firebaseapp.com/source
// Reference: https://www.youtube.com/watch?v=7E13ZBCyKT0

//'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const ref = admin.database().ref();

function exec() {
  //return "Hello world, it's Firebase!"
  return new Promise((resolve, reject) => {
    const outs = [];
    // ref.child('users').orderByChild('signupDate').startAt(lastWeek).once('value')
    // .then(snap => {snap.forEach...}
    //ref.('invites-outbox');
    ref.child('user-invites').once('value')
    .then(snap => {
      snap.forEach(childSnap => {
        const out = childSnap.val();
        outs.push(out);
      });
      console.log('outs, invites-outbox.js, line 24', outs);
      if(outs.length){
        resolve(outs);
      } else {
        reject("Promise had an error");
      }
    })
  })
}
