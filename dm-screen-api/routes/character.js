const express = require('express');
const characters = require("../views/character");
const { authenticateToken } = require('../views/middleware');


const router = express.Router();

router.get('/', authenticateToken, characters.findAll)
router.get('/:id', authenticateToken, characters.findOne)
router.post('/', authenticateToken, characters.create)
router.patch('/:id', authenticateToken, characters.update)
router.delete('/:id', authenticateToken, characters.delete)


module.exports = router;