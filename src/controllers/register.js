'use strict'

const User = require('../models/users');
const Session = require('../models/sessions');
const crypto = require('crypto');

const register = (req, res) => {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      return console.error(err);
    }
    if (user) {
      res.json({success: false, msg: "Username already exists. Try again."}); 
    } else { 
      let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        firstname: 'test1',
        lastname: 'test1'
      });
      newUser.save(function (err, user) {
        if (err) {
          return console.error(err);
        }
      });
      const uniqueKey = generate_key();
      res.cookie('session', uniqueKey, {httpOnly: true});
      let newSession = new Session({
        username: req.body.username,
        sessionId: uniqueKey
      });
      newSession.save(function(err,session) {
        if (err) {
          return console.error(err);
        }
      });
      // do i have to pass the cookie or sessionId at all back here?
      console.log("Register cookie success");
      res.json({success: true, user: newUser.username})
    }
  })
}

const generate_key = () => {
  let sha = crypto.createHash('sha256');
  sha.update(Math.random().toString());
  return sha.digest('hex');
};


module.exports = register;
