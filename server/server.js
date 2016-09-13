const express = require('express');
const serveStatic = require('serve-static');
const partials = require('express-partials');
const bodyParser = require('body-parser');
const dbHelper = require('./db/helper');
const path = require('path');
const jwt = require('express-jwt');

const app = express();

const secret = process.env.SECRET || require('../auth0Config').SECRET;
const clientID = process.env.REACT_APP_CLIENT_ID || require('../auth0Config').CLIENT_ID;

const jwtCheck = jwt({
  secret: new Buffer(secret, 'base64'),
  audience: clientID
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../build'));

app.get('/api/vas', (req, res) => {
  dbHelper.getAllCards()
  .then(r => res.status(200).send(r))
  .catch(err => res.status(404).send(err));
});

app.post('/api/vas',jwtCheck, (req, res) => {
  if (req.user.app_metadata.roles.indexOf('admin') > -1) {
    dbHelper.updateCard(req.body)
    .then(r => res.status(201).send(r))
    .catch(err => res.status(404).send(err));
  } else {
    res.status(404).send('Unauthorised');
  }
});

app.delete('/api/vas',jwtCheck, (req, res) => {
  if (req.user.app_metadata.roles.indexOf('admin') > -1) {
    dbHelper.deleteCard(req.body)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(404).send(err));
  } else {
    res.status(404).send('Unauthorised');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;
