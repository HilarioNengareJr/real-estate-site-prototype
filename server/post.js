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
    const result = await pool.query('SELECT posts.*, users.username FROM posts JOIN users ON user_id = users.id');
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

router.get('/:userId/profile', async (req, res) => {
  const userId = req.params.userId;
  try {
    const userPosts = await pool.query(
      `SELECT users.username, posts.* FROM posts 
       JOIN users ON posts.user_id = users.id 
       WHERE users.id = $1`,
      [userId]
    );
    console.log(userPosts.rows);
    res.status(200).json(userPosts.rows);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ error: 'Error fetching user posts' });
  }
});


router.delete('/:postId', authenticateToken, async (req, res) => {
  const postId = req.params.postId;

  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1', [postId]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    console.log('Post deleted successfully.');
    
    const updatedListings = await pool.query('SELECT * FROM posts WHERE user_id = $1', [req.user.id]);
    res.status(200).json(updatedListings.rows);
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Error deleting post' });
  }
});

router.get('/edit/:postId', authenticateToken, async (req, res) => {
  const postId = req.params.postId;

  try{ 
    const post = pool.query('SELECT * FROM posts WHERE id=$1', [postId]);
    if(post.rowCount === 0){
      return res.status(404).json({ message: 'Post not found' });
    }
  }catch(error){
    console.error('Error retrieving post for editing:', error);
    res.status(500).json({ error: 'Error retrieving post for editing' });
  }

})

router.put('/edit/:postId', upload.array('images'), authenticateToken, async (req, res) => {
  const postId = req.params.postId;

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
      await pool.query(
          `UPDATE posts
           SET type_of_property = $1, price = $2, city = $3, whatsapp = $4, phone_number = $5,
           address = $6, beds = $7, baths = $8, rooms = $9, wifi = $10, running_water = $11,
           school = $12, market = $13, parking = $14, bus_stop = $15, restaurant = $16,
           user_id = $17, image_filenames = $18
           WHERE id = $19`,
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
              postId
          ]
      );

      console.log('Post updated successfully.');
      res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Error updating post' });
  }
});

module.exports = router;