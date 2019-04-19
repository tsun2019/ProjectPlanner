'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const sessionSchema = new Schema({
  username: String,
  sessionId: String,
})

let Session = mongoose.model('Session', sessionSchema);

module.exports = Session;


