'use strict'

const Session = require('../models/sessions');

const auth = (req, res) => {
  console.log(req.cookies);
  const sessionId = req.cookies.session;
  Session.findOne({sessionId: sessionId}, function(err, session) {
    console.log("Session: ", session);
    if (err) {
      return console.error(err);
    }
    if(session) {
      return res.json({loggedIn: true, username: session.username})
    } else {
      return res.json({loggedIn: false})
    }
  })  
}

module.exports = auth;
