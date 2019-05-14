'use strict'

const cookieParser = require('cookie-parser');
const User = require('../models/users');
const Session = require('../models/sessions');
const crypto = require('crypto');

const login = (req, res) => {
  //when login sucessfully create session ID
  let cookieSession  = req.cookies.session;
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) {
      return console.error(err); 
    }
    if (user) {
      if (user.password === req.body.password) {
        const uniqueKey = generate_key();  
        res.cookie('session', uniqueKey, {httpOnly: true});
        let newSession = new Session({
          username: user,
          sessionId: uniqueKey
        });
        newSession.save(function(err,session) {
          if (err) {
            return console.error(err);
          }
        });
        console.log("Login True, session ID created");
        res.json({success: true, username: user.username, 
                    msg: "SessionId created and saved!"});
      } else {
          //reach here if put in wrong password
          res.json({success: false, msg: "Wrong username or password."});
        }
    } else {
      //reach here if tried to log in with a username that doesn't exist yet in db.
        res.json({success: false, msg: "Wrong username or password."});
      }
  });
}

const generate_key = () => {
  let sha = crypto.createHash('sha256');  
  sha.update(Math.random().toString());
  return sha.digest('hex');
};

module.exports = login;
