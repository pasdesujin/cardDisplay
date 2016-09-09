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
//   entries: [{
//     name: '1',
//     detail: 'detail1',
//     price: '100',
//     url: '*777*11#',
//     _button: 'url'
//   }, {
//     name: '2',
//     detail: 'detail2',
//     price: '102',
//     url: '*777*22#',
//     _button: 'url'
//   }]
// });

// test.save((err, test) => {
//   if (err) { console.log(err); }
//   else { console.log(test); }
// });

// Vas.find({}, {
//   'tableName': 1,
//   'headers': 1,
//   'entries': 1
// }).exec().then(r => console.log(r[0]));
