const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const userRoutes = require('./users');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../evbulucu/build')));

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

app.use('/api/users', userRoutes);

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

module.exports = app;
