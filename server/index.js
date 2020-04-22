const express = require('express');
const app = express();
const db = require('./database');
const path = require('path');

app.use(express.static(path.resolve('__dirname', '..', 'public')));
app.use(express.json());

const PORT = 3000 || process.env.PORT;

app.get('/movies', (req, res) => {
  db.query(`SELECT * FROM movies`, (err, results) => {
    if (err) {
      console.log('Error: ', err);
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/movies', (req, res) => {
  console.log(req.body);
  let insertQueryString = `INSERT INTO movies (title) VALUES (?)`;
  let updateQueryString = `UPDATE movies SET movies.watched = (?) WHERE movies.title = (?)`;
  if (req.body.watched !== undefined) {
    db.query(updateQueryString, [req.body.watched, req.body.title], (err, results) => {
      if (err) {
        console.log('Error: ', err);
        res.status(500).send(err);
      } else {
        res.send(results);
      }
    });
  } else {
    db.query(insertQueryString, [req.body.title], (err, results) => {
      if (err) {
        console.log('Error: ', err);
        res.status(500).send(err);
      } else {
        res.send(results);
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})