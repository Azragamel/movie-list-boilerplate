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
      console.log('Great success!');
      res.send(results);
    }
  });
});

app.post('/movies', (req, res) => {
  let queryString = `INSERT INTO movies (title) VALUES (?)`;
  db.query(queryString, [req.body.title], (err, results) => {
    if (err) {
      console.log('Error: ', err);
      res.status(500).send(err);
    } else {
      console.log('Great Success!');
      res.send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})