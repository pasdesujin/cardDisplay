const express = require('express');
const serveStatic = require('serve-static');
const partials = require('express-partials');
const bodyParser = require('body-parser');
const dbHelper = require('./db/helper');
const path = require('path');

const app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../build'));

app.get('/api/vas', (req, res) => {
  dbHelper.getAllCards()
  .then(r => res.status(200).send(r))
  .catch(err => res.status(404).send(err));
});

app.post('/api/vas', (req, res) => {
  dbHelper.updateCard(req.body)
  .then(r => res.status(201).send(r))
  .catch(err => res.status(404).send(err));
});

app.delete('/api/vas', (req, res) => {
  dbHelper.deleteCard(req.body)
  .then(r => res.status(200).send(r))
  .catch(err => res.status(404).send(err));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;
