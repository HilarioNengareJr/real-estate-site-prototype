const express = require('express');
const pool = require('./db');
const { check, validationResult } = require('express-validator');
const router = express.Router();

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

  module.exports = router;