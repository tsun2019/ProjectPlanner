'use strict'

//required for express server 
const express = require('express');
const app = express();
const port = 5001;

//Add on
const crypto = require('crypto');

//For easier absolute pathing in Node
const path = require('path');

//routing
const router = express.Router();
//import controllers
const startController = require('./controllers');
const registerController = require('./controllers/register');
const loginController = require('./controllers/login');
const logoutController = require('./controllers/logout');
const authController = require('./controllers/auth');
//required for mongoose
const mongoose = require('mongoose');
//body-parser for parsing request
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


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

//need cookie middleware
app.use(cookieParser());

//set cookie
//app.use(login);

//tells where to locate static files html/css/js
app.use(express.static(path.join(__dirname, '../public')));

//respond with index.html file with everything in it
app.get('/', startController);

//privaterouter
app.get('/auth', authController);

//post user data to database.
app.post('/register', registerController);

//post user data and compare to see if should login
app.post('/login', loginController);

//post/delete sessionId
app.post('/logout', logoutController);

//use router

app.use(router);



//required
app.listen(port, () => console.log(`Express server listening in on port ${port}!`))
