const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const subscribeRoute = require('./routes/subscribe');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
// mongodb://localhost:27017/mobile_recharge
mongoose.connect('mongodb://localhost:27017/mobile_recharge', {
    // options like useNewUrlParser are deprecated in newer mongoose but harmless to include or omit for now
    // keeping it simple as per defaults
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Use Routes
app.use('/auth', require('./routes/auth'));
app.use('/', subscribeRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
