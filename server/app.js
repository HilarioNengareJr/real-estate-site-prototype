'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../evbulucu/build')));

app.use((req, res, next) => {
  if (/(\.ico|\.js|\.css|\.jpg|\.png|\.map)$/i.test(req.path)) {
    next();
  } else {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.sendFile(path.join(__dirname, '../evbulucu/build', 'index.html'));
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
