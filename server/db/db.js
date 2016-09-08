const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const options = {
  promiseLibrary: require('bluebird')
};
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/airtouch';

mongoose.connect(mongoUri, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting'));
db.once('open', () => { console.log('Connected to Mongodb'); });

module.exports = db;
