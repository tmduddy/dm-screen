const express = require('express');
const rules = require("../views/rule");
const { authenticateToken } = require('../views/middleware');


const router = express.Router();

router.get('/', authenticateToken, rules.findAll)
router.get('/:id', authenticateToken, rules.findOne)
router.post('/', authenticateToken, rules.create)
router.patch('/:id', authenticateToken, rules.update)
router.delete('/:id', authenticateToken, rules.delete)


module.exports = router;