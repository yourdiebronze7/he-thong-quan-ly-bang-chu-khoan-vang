const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Ghi nhận giao dịch
router.post('/', (req, res) => {
  const newTransaction = new Transaction(req.body);
  newTransaction.save().then(transaction => res.json(transaction)).catch(err => res.status(400).json(err));
});

// Lấy danh sách giao dịch của người dùng
router.get('/:userId', (req, res) => {
  Transaction.find({ userId: req.params.userId })
    .then(transactions => res.json(transactions))
    .catch(err => res.status(500).json(err));
});

module.exports = router;