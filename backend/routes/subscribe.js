const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// 3. Express Route Handler (Logic Only)
// User: Write only the Express route handler code
// POST /subscribe
router.post('/subscribe', async (req, res) => {
    try {
        const { username, planName, subscriptionDuration, price, dataLimit } = req.body;

        // Validate input fields
        if (!username || !planName || !subscriptionDuration) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Missing required fields: username, planName, or subscriptionDuration'
            });
        }

        // Logic to calculate status (assuming it's active upon subscription)
        // Note: In a real app, you might fetch plan details from a Plans collection using planName
        // For this exam-style task, we assume details are passed or looked up simply.
        // The prompt asks to accept: username, planName, subscriptionDuration.
        // However, the schema requires: price, dataLimit.
        // We will assume these are passed in the body for simplicity, or we would need a Plan model.
        // Given the prompt "Accept request body: username, planName, subscriptionDuration"
        // and "Schema fields must include ... Price, Data Limit", I will optionally accept them or mock them if missing.
        // To keep it robust, I'll expect them from the frontend (which I will build) or default them.

        const newSubscription = new Subscription({
            username,
            planName,
            price: price || 0, // Fallback if not provided (though frontend should provide it)
            dataLimit: dataLimit || 'N/A',
            validity: parseInt(subscriptionDuration),
            subscriptionStatus: 'Active'
        });

        // Store subscription details in MongoDB
        await newSubscription.save();

        // Return a JSON response
        // Required: username, plan name, subscription status (Success / Failed)
        res.status(201).json({
            username: newSubscription.username,
            planName: newSubscription.planName,
            subscriptionStatus: 'Success',
            message: 'Recharge successful!'
        });

    } catch (error) {
        console.error('Subscription Error:', error);
        res.status(500).json({
            username: req.body.username || 'Unknown',
            planName: req.body.planName || 'Unknown',
            subscriptionStatus: 'Failed',
            message: 'Server error processing subscription'
        });
    }
});

module.exports = router;
