const mongoose = require('mongoose');

// 4. Database – MongoDB (Mongoose) Schema
// User: Design a MongoDB schema to store subscription details
const subscriptionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  planName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  dataLimit: {
    type: String,
    required: true
  },
  validity: {
    type: Number, // in days
    required: true
  },
  subscriptionDate: {
    type: Date,
    default: Date.now
  },
  subscriptionStatus: {
    type: String,
    enum: ['Active', 'Expired'],
    default: 'Active'
  }
});

// Create and export the model
const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
