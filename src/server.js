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

  let user = new User({
    username: req.body.username,
    password: req.body.password,
    firstname: 'test1',
    lastname: 'test1'
  });

  user.save(function (err, user) {
    if (err) {
      return console.error(err);
    }
  });
  res.json({sucess: true, user: user})
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

//try save into database and find

//now how do i get front end to call a save with user input...?
User.find(function (err, users) {
  if (err) {
    return console.error(err);
  }
  users.map((element) => {
    console.log(element.username);
  })
})


//required
app.listen(port, () => console.log(`Express server listening in on port ${port}!`));

