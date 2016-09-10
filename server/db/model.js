const db = require('./db');
const mongoose = require('mongoose');

const vasSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  sort: Number,
  url: String,
  details: String
});

const Vas = mongoose.model('Vas', vasSchema);

module.exports = Vas;

// Test

// let test = new Vas({
//   title: '1',
//   details: 'detail1',
//   subtitle: '100',
//   url: '*777*11#',
//   sort: 0
// });
// let test2 = new Vas({
//   title: '2',
//   details: 'detail2',
//   subtitle: '102',
//   url: '*777*22#',
//   sort: 1
// });

// test.save((err, test) => {
//   if (err) { console.log(err); }
//   else { console.log(test); }
// });

// test2.save((err, test) => {
//   if (err) { console.log(err); }
//   else { console.log(test); }
// });

// Vas.find({}, {
//   'title': 1,
//   'details': 1,
//   'subtitle': 1,
//   'url': 1,
//   'sort': 1
// }).exec().then(r => console.log(r));
