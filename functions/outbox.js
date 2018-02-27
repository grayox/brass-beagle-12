// Reference: https://www.youtube.com/watch?v=tResEeK6P5I | alone-together.firebaseapp.com/source
// Reference: https://www.youtube.com/watch?v=7E13ZBCyKT0

exports.send = send;
exports.cleanup = cleanup;

//'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const ref = admin.database().ref();
const PATH = 'invites-outbox';

// function send() {
//   //return "Hello world!"
//   return new Promise((resolve, reject) => {
//     const outs = [];
//     // ref.child('users').orderByChild('signupDate').startAt(lastWeek).once('value')
//     // .then(snap => {snap.forEach...}
//     //ref.('invites-outbox');
//     ref.child('user-invites').once('value')
//     .then(snap => {
//       snap.forEach(childSnap => {
//         const out = childSnap.val();
//         outs.push(out);
//       });
//       console.log('outs, outbox.js, line 26', outs);
//       if(outs.length){
//         resolve(outs);
//       } else {
//         reject("Promise had an error");
//       }
//     })
//   })
// }

function send() {
  //return "Hello world!"
  return new Promise((resolve, reject) => {
    const BATCH_SIZE = 15;
    const keys = [];
    const records = [];
    // ref.child('users').orderByChild('signupDate').startAt(lastWeek).once('value')
    // .then(snap => {snap.forEach...}
    //ref.('invites-outbox');
    ref.child(PATH).limitToFirst(BATCH_SIZE).once('value')
    .then(snap => {

      // Populate payload
      snap.forEach(childSnap => {
        // Populate keys for client to callback for deletion
        const key = childSnap.key;
        keys.push(key);
        const record = childSnap.val();
        records.push(record);
      });

      // console.log('keys, outbox.js, line 29', keys);
      // console.log('records, outbox.js, line 30', records);

      // Resolve
      if(records.length && keys.length && (records.length === keys.length)){
        const out = {
          keys: keys,
          records: records,
        };
        resolve(out);
      } else {
        reject('error');
      }
    })
  })
}

function cleanup(s) {
  //return "Hello world!"
  return new Promise((resolve, reject) => {
    // s.keys{string} unparsed batch list of emails to delete
    // console.log('s', s);
    // resolve(s);
    const keys = JSON.parse(s.keys);
    const records = JSON.parse(s.records);
    // console.log('keys', keys);
    // console.log('records', records);
    // resolve(keys);

    // Push to archive
    // Already done at invite creation time
    // Now, only need to delete (.remove())
    
    // Delete outbox
    try{
      const outboxRef = ref.child(PATH);
      //outboxRef.remove(keys);
      keys.forEach(key => {
        outboxRef.child(key).remove();
      });

      // Resolve
      resolve(keys);
    } catch(e) {
      const message = e.message;
      console.log(message);
      reject(message);
    }

  })
}