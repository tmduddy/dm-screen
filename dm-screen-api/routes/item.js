const express = require('express');
const items = require("../views/item");
const { authenticateToken } = require('../views/middleware');


const router = express.Router();

router.get('/', authenticateToken, items.findAll)
router.get('/:id', authenticateToken, items.findOne)
router.post('/', authenticateToken, items.create)
router.patch('/:id', authenticateToken, items.update)
router.delete('/:id', authenticateToken, items.delete)


module.exports = router;