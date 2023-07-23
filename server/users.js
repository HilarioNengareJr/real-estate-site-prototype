// users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );

    const token = jwt.sign({ userId: newUser.rows[0].id }, process.env.JWT_SECRET);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({ success: true, user: newUser.rows[0], token });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ success: true, user: user.rows[0], token });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

router.post(
  '/enlist',
  [
    check('type_of_property').notEmpty().isString(),
    check('price').notEmpty().isString(),
    check('city').notEmpty().isString(),
    check('whatsapp').notEmpty().isMobilePhone(),
    check('phone_number').notEmpty().isMobilePhone(),
    check('address').notEmpty().isString(),
    check('beds').notEmpty().isInt({ min: 1 }),
    check('baths').notEmpty().isInt({ min: 1 }),
    check('rooms').notEmpty().isInt({ min: 1 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      type_of_property,
      price,
      city,
      whatsapp,
      phone_number,
      address,
      beds,
      baths,
      rooms,
      wifi,
      running_water,
      school,
      market,
      parking,
      bus_stop,
      restaurant,
    } = req.body;

    try {

      await pool.query(
        `INSERT INTO posts (type_of_property, price, city, whatsapp, phone_number, address, beds, baths, rooms, wifi, running_water, school, market, parking, bus_stop, restaurant)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
        [
          type_of_property,
          price,
          city,
          whatsapp,
          phone_number,
          address,
          beds,
          baths,
          rooms,
          wifi,
          running_water,
          school,
          market,
          parking,
          bus_stop,
          restaurant,
        ]
      );
      
      console.log('Data inserted successfully.');
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ error: 'Error inserting data into the database' });
    }
  }
);


// Logout endpoint
router.post('/logout', (req, res) => {
  try {
    // Clear the token cookie to log out the user
    res.clearCookie('token');
    res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Check authentication middleware
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, error: 'Unauthorized: Invalid token' });
    }

    try {
      const user = await pool.query('SELECT * FROM users WHERE id = $1', [decoded.userId]);

      if (user.rows.length === 0) {
        return res.status(401).json({ success: false, error: 'Unauthorized: User not found' });
      }

      req.user = user.rows[0];
      next();
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  });
};

// Check authentication endpoint
router.get('/check-auth', authenticateToken, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});



module.exports = router;
