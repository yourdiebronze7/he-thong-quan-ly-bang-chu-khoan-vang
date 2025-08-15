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

// Root route
app.get('/', (req, res) => {
  res.send('Chào mừng đến với hệ thống quản lý giao dịch vàng!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});