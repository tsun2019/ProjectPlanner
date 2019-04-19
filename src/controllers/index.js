const path = require('path');

const startController = (req,res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../public')
  });
}

module.exports = startController;
