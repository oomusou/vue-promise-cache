const express = require('express');
const cors = require('cors');

const data = require('./books.json');

const app = express().use(cors());
const hostname = '172.0.0.1';
const port = 3000;

app.get('/book', ({ query: { id } }, res) =>
  res.send(data.books.filter(x => x.id === +id)));

app.listen(port, () =>
  console.log(`Serving running at http://${hostname}:${port}/`));
