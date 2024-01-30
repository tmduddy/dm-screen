const express = require('express');
const stores = require("../views/store");
const { authenticateToken } = require('../views/middleware');


const router = express.Router();

router.get('/', authenticateToken, stores.findAll)
router.get('/:id', authenticateToken, stores.findOne)
router.post('/', authenticateToken, stores.create)
router.patch('/:id', authenticateToken, stores.update)
router.delete('/:id', authenticateToken, stores.delete)


module.exports = router;