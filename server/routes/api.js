const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ngUsers = require('../models/ngUsers');

const db = "mongodb://zerosumjoke:(*yp51l0n3!*)@ds261745.mlab.com:61745/ngadminprocess";
mongoose.Promise = global.Promise;

var promise = mongoose.connect(db, {
    useMongoClient: true
});
promise.then(function(db, err) {
    if(err) {
        console.log('Connection to database error' + err);
    }
});

router.get('/api', function(req, res) {
    res.send('api works');
    console.log("Api works");
});

module.exports = router;