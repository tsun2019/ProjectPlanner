'use strict'

//required for express server 
const express = require('express');
const app = express();
const port = 5001;

//required for mongoose
const mongoose = require('mongoose');
//body-parser for parsing request
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//now connecting to mongodb using mongoose (node driver)
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log("connected!");
});

//Add ons
//For easier absolute pathing in Node
const path = require('path');

//routing
const router = express.Router();

//tells where to locate static files html/css/js
app.use(express.static(path.join(__dirname, '../public')));

//respond with index.html file with everything in it
app.get('/', (req,res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../public')
  });
})

app.post('/login', (req,res) => {
  console.log(req.body);
  res.json({sucess: true})
 // res.send();
})

//use router
app.use(router);

//set up mongo schema
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
let testUser = new User({
      username: 'test0',
      password: 'test0',
      firstname: 'test0',
      lastname: 'test0'
});

//try save into database and find
testUser.save(function (err, testUser) {
  if (err) {
    return console.error(err);
  }
  console.log(testUser.username);
});

//now how do i get front end to call a save with user input...?
User.find(function (err, users) {
  if (err) {
    return console.error(err);
  }
  users.map((element) => {
    console.log(element.username);
  })
})
*/

//required
app.listen(port, () => console.log(`Express server listening in on port ${port}!`));

