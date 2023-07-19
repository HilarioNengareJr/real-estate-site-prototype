'use strict';
const express = require('express');
const db = require('./db');

const router = express.Router();

// register route
app.post('/register', async(req, res)=>{
    try{
        const user = req.body;
        const result = await db.save(user);
        res.json({success: true, id: result.id});
    }catch (error){
        res.status(500).json({success: false, error: error.message });
    }
});

// login route
app.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;
        db.view('users/login-by-email', {key: email}, (err, rows) => {
            if (err || rows.length === 0) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }else{
                const user = rows[0].value;
            }

            if (user.password === password){
                return res.json({success: true, user});
            }else{
                
            }
        
        });
    }
})

module.exports = router;