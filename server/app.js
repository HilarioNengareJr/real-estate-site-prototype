'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cradle = require('cradle');

const app = express();
const port = 3000;

const connection = new cradle.Connection('http://localhost', 5984, {
  cache: true,
  raw: false,
});

const dbName = 'users';
const db = connection.database(dbName);

app.use(express.static(path.join(__dirname, '../evbulucu/build')));
app.use(bodyParser.json());

// Register route
app.post('/register', async (req, res) => {
  try {
    const user = req.body;
    const result = await db.save(user);
    res.json({ success: true, id: result.id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    db.view('users/login-by-email', { key: email }, (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(404).json({ success: false, message: 'User not found' });
      } else {
        const user = rows[0].value;
        if (user.password === password) {
          return res.json({ success: true, user });
        } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

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
