'use strict'

const Session = require('../models/sessions');

const logout = (req, res) => {
  let sessionId = req.cookies.session;
  console.log("mycookieSession " , sessionId)
  Session.deleteOne({ sessionId: sessionId }, function (err, sessionId) {
    if (err) {
      return console.error(err);
    }
    console.log("deleted session in cookie");
    return res.json({loggedIn: false})
  })
}

module.exports = logout;
