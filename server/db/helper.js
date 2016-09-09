const db = require('./db');
const Vas = require('./model');

exports.getAllVas = function() {
  return Vas.find({}, {
    '_id': 0,
    'tableName': 1,
    'headers': 1,
    'entries': 1
  }).exec();
};

exports.addTable = function(data) {
  return Vas.findOne({'tableName': data.tableName}).exec()
    .then(result => {
      if (!result) {
        const d = new Vas(data);
        return d.save(data);
      } else {
        return 'table already exists';
      }
    }
  );
};

exports.updateTable = function(data) {
  return Vas.findOneAndUpdate({'tableName': data.tableName}, data).exec()
  .then(result => {
    if (!result) {
      return 'table does not exist';
    } else {
      return result;
    }
  });
};

exports.deleteTable = function(data) {
  return Vas.findOneAndRemove({'tableName': data.tableName}).exec()
  .then(result => {
    if (!result) {
      return 'table does not exist';
    } else {
      return result;
    }
  });
};

// exports.deleteTable({tableName: 'Test Table'}).then(r => console.log(r));
