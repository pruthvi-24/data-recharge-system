const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const subscribeRoute = require('./routes/subscribe');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mobile_recharge', {
   
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.use('/auth', require('./routes/auth'));
app.use('/', subscribeRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
