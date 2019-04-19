'use strict'

const mongoose = require('mongoose');


//set up mongo schemas and models
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

//compile into model
let User = mongoose.model('User', userSchema);

//try save into database and find

User.find(function (err, users) {
  if (err) {
    return console.error(err);
  }
  users.map((element) => {
    console.log(element.username);
  })
})

module.exports = User;
