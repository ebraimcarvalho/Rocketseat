const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { 
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});

// Primeira rota
app.get('/', (req, res) => {
  return res.send('Hello World! Ebra');
});

app.listen(3001);