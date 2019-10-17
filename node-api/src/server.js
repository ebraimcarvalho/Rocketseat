const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World! I\'m Ebra\'s Dev!');
});

app.listen(3001);