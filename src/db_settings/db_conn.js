var mysql = require('mysql2');
var settings = require('./configs.json');
var db;

function connectDatabase() {
  if (!db) {
    db = mysql.createConnection(settings);

    db.connect(function (err) {
      if (!err) {
        console.log('Database is connected!');
      } else {
        console.log('Error connecting database!', err);
      }
    });
  }
  return db;
}

module.exports = connectDatabase();