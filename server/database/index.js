const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'movies'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to mySQL database');
  }
});

module.exports = connection;