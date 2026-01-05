const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ status: 'Failed', message: 'Username and password required' });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ status: 'Failed', message: 'Username already exists' });
        }

        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ status: 'Success', message: 'Account created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Failed', message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ status: 'Failed', message: 'Username and password required' });
        }

        const user = await User.findOne({ username, password }); // Plain text comparison for this task
        if (!user) {
            return res.status(401).json({ status: 'Failed', message: 'Invalid credentials' });
        }

        res.json({ status: 'Success', message: 'Login successful', username: user.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Failed', message: 'Server error' });
    }
});

module.exports = router;
