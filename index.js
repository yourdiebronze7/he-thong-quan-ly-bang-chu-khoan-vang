const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Mongoose connection
mongoose.connect('mongodb://localhost:27017/gold_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('Chào mừng đến với hệ thống quản lý giao dịch vàng!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});