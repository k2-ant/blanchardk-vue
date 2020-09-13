const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const goodreads = require('goodreads-api-node');
// Follow instructions to set up admin credentials:
// https://firebase.google.com/docs/functions/local-emulator#set_up_admin_credentials_optional
const express = require('express');
const app = express();
// Set up ENV variables properly - https://firebase.google.com/docs/functions/config-env
const myCredentials = {
    key: functions.config().goodreads.key,
    secret: functions.config().goodreads.secret
};
const gr = goodreads(myCredentials);
app.get('/getBook/:bookId', async (req, res) => {
    try {
        let response = await gr.showBook(req.params.bookId);
        res.send(response);
    }
    catch (error) {
        console.log('Error getting book', error.message);
        res.sendStatus(500);
    }
});
app.get('/getUserShelves/:userId', async (req, res) => {
    try {
        let response = await gr.getUsersShelves(req.params.userId);
        res.send(response)
    }
    catch (error) {
        console.log('Error getting user', error.message);
        res.sendStatus(500);
    }
})
exports.api = functions.https.onRequest(app);

// https://www.npmjs.com/package/goodreads-api-node

// last i left off, goodreads api requires me to authenticate in order to access shelves.
// need to authen