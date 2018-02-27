// Reference: https://www.youtube.com/watch?v=7E13ZBCyKT0
// Reference: https://stackoverflow.com/a/47361132/1640892
// Reference: https://stackoverflow.com/a/42729988/1640892 // FrankVanPufflen

//'use strict';
const functions = require('firebase-functions');
const outbox = require('./outbox.js');

// * * * * * * * onHttps * * * * * * *

// Send to client the list of emails stored in outbox
exports.outboxSend = functions.https.onRequest((request, response) => {
  // https://us-central1-green-comet.cloudfunctions.net/outboxSend
  outbox.send()
  .then(val => {
    //console.log('val, index.js, line 13', val);
    return response.status(200).send(val)//.send('ok');
  }).catch(e => {
    console.log(e.stack);
    return response.status(500).send('error');
  });
})

// Cleanup (delete) from outbox a list of keys (batch) returned from the client who sent out the emails
exports.outboxCleanup = functions.https.onRequest((request, response) => {
  // https://us-central1-green-comet.cloudfunctions.net/outboxCleanup
  outbox.cleanup(request.body)
  // .then(val => {
    //   return response.send(val);
    // })
    .then(val => {
      // console.log('val, index.js, line 26', val);
      return response.status(200).send(val)//.send('ok');
  }).catch(e => {
    console.log(e.stack);
    return response.status(500).send('error');
  });
})

// * * * * * * * onAuthenticate * * * * * * *

// Add user zip code (from referrer)
// Add user referral type (optional input from referrer)