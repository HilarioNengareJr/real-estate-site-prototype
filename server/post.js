const express = require('express');
const pool = require('./db');
const { check, validationResult } = require('express-validator');
const multer = require('multer'); 
const path = require('path');
const router = express.Router();
const { authenticateToken } = require('./users');

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext); 
  },
});

const upload = multer({ storage }); 

router.post(
  '/enlist', upload.array('images'),
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
  authenticateToken,
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
    const userId = req.user.id;

    try {
      const imagePaths = req.files.map((file) => file.filename);
      
      await pool.query(
        `INSERT INTO posts (type_of_property, price, city, whatsapp, phone_number, address, beds, baths, rooms, wifi, running_water, school, market, parking, bus_stop, restaurant, user_id, image_filenames)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
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
          userId,
          imagePaths, 
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

router.get('/house-post', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    const posts = result.rows; 
    console.log(posts);
    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts found' });
    }
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error querying post data:', err);
    res.status(500).json({ error: 'Error querying post data' });
  }
});



module.exports = router;