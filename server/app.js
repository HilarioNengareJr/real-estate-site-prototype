'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const axios = require('axios');
const { start } = require('repl');
const app = express();
const port = 3000;

const baseURL = 'http://localhost:5984';
const dbName = 'users';
const usersAPI = axios.create({ baseURL });

app.use(express.static(path.join(__dirname, '../evbulucu/build')));
app.use(bodyParser.json());

// Register route
app.post('/register', async (req, res) => {
  try {
    const user = req.body;
    const result = await usersAPI.post(`/${dbName}`, user);
    res.json({ success: true, id: result.data.id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await usersAPI.get(`/${dbName}/_design/users/_view/login-by-email?key="${email}"`);
    const rows = response.data.rows;
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    } else {
      const user = rows[0].value;
      if (user.password === password) {
        return res.json({ success: true, user });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    }
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
