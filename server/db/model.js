const db = require('./db');
const mongoose = require('mongoose');

const vasSchema = new mongoose.Schema({
  tableName: String,
  headers: [String],
  entries: {}
});

const Vas = mongoose.model('Vas', vasSchema);

module.exports = Vas;

// Test

// let test = new Vas({
//   tableName: 'Test Table',
//   headers: ['name', 'detail', 'price', 'url'],
//   entries: [['1', 'detail1', '100', '*777*11#'], ['2', 'detail2', '102', '*777*22#']]
// });

// test.save((err, test) => {
//   if (err) { console.log(err); }
//   else { console.log(test); }
// });

// Vas.find({}, {
//   'headers': 1,
//   'entries': 1
// }).exec().then(r => console.log(r[0]));
