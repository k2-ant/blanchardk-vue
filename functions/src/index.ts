import * as functions from 'firebase-functions';
const express = require('express');
const app = express();
const axios = require('axios');

app.post('/getBook', async (req, res) => {
try {
    let response = await axios.get(req);
    console.log(response)
    res.send(response);
} catch(error) {
    console.log('Error getting book', error.message);
    res.sendStatus(500);
}
});

  exports.api = functions.https.onRequest(app);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// https://firebase.google.com/docs/functions/http-events?authuser=0