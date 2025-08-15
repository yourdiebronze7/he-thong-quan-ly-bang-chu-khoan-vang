const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Đăng ký người dùng
router.post('/register', (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(user => res.json(user)).catch(err => res.status(400).json(err));
});

// Đăng nhập người dùng
router.post('/login', (req, res) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user || user.password !== req.body.password) {
        return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
      }
      res.json({ message: 'Đăng nhập thành công' });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;