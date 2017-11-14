const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ngusersSchema = new Schema ({
    name: String,
    password: String
});

module.exports = mongoose.model('ngusers', ngusersSchema, 'ngusers');