'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

const baseURL = 'http://localhost:5984';
const dbName = 'users';
const usersAPI = axios.create({ baseURL });

const bcrypt = require('bcrypt');

const session = require('express-session');
const rateLimit = require('express-rate-limit');
const xss = require('xss');
const cors = require('cors');
const passwordValidator = require('password-validator');

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10, // 10 requests per windowMs
});

const passwordSchema = new passwordValidator();
passwordSchema
  .is().min(8) // Minimum length 8
  .has().uppercase() // Must have uppercase letters
  .has().lowercase() // Must have lowercase letters
  .has().digits() // Must have digits
  .has().not().spaces(); // Should not have spaces

app.use(express.static(path.join(__dirname, '../evbulucu/build')));
app.use(bodyParser.json());

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true, 
      httpOnly: true,
      maxAge: 86400000,
    },
  })
);

// Middleware to check if the user is logged in
const checkAuth = (req, res, next) => {
  if (req.session.user) {
    // User is logged in
    next();
  } else {
    // User is not logged in
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!passwordSchema.validate(password)) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      name: xss(name), 
      email: xss(email), 
      password: hashedPassword,
    };

    const result = await usersAPI.post(`/${dbName}`, user);
    res.json({ success: true, id: result.data.id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/login', loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await usersAPI.get(`/${dbName}/_design/users/_view/login-by-email?key="${email}"`);
    const rows = response.data.rows;
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    } else {
      const user = rows[0].value;
      if (await bcrypt.compare(password, user.password)) {
        // Set the user data in session to indicate that the user is logged in
        req.session.user = user;
        return res.json({ success: true, user });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/logout', (req, res) => {
  // Clear the session data to log out the user
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ success: false, error: err.message });
    } else {
      res.json({ success: true });
    }
  });
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
