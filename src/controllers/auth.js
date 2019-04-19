'use strict'

const auth = (req, res) => {
  console.log(req.cookies);  
  return res.json({loggedIn: true})
}

module.exports = auth;
