'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const buildPath = path.join(__dirname, '../evbulucu/build');

app.use(express.static(buildPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
