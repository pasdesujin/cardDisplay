const db = require('./db');
const Vas = require('./model');

exports.getAllCards = function() {
  return Vas.find({}, {
    '_id': 1,
    'title': 1,
    'details': 1,
    'subtitle': 1,
    'url': 1,
    'sort': 1
  }).exec();
};

exports.addCard = function(data) {
  const d = new Vas(data);
  return d.save(data);
};

exports.updateCard = function(data) {
  return Vas.findOneAndUpdate({'_id': data._id}, data).exec()
  .then(result => {
    if (!result) {
      return 'card does not exist';
    } else {
      return result;
    }
  });
};

exports.deleteCard = function(data) {
  return Vas.findOneAndRemove({'_id': data._id}).exec()
  .then(result => {
    if (!result) {
      return 'card does not exist';
    } else {
      return result;
    }
  });
};

// exports.getAllVas().then(r => console.log(r));
