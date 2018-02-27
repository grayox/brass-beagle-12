// Reference: https://www.youtube.com/watch?v=7E13ZBCyKT0
// Reference: https://stackoverflow.com/a/47361132/1640892
// Reference: https://stackoverflow.com/a/42729988/1640892 // FrankVanPufflen

//'use strict';
const functions = require('firebase-functions');
const outbox = require('./outbox.js');

exports.outbox = functions.https.onRequest((request, response) => {
  // https://us-central1-green-comet.cloudfunctions.net/outbox
  outbox.exec()
  .then(val => {
    console.log('val, index.js, line 13', val);
    return response.send(val);
  })
})
