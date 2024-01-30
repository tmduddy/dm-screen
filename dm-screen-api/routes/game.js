const express = require('express');
const games = require("../views/game");
const { authenticateToken } = require('../views/middleware');


const router = express.Router();

router.get('/', authenticateToken, games.findAll)
router.get('/:id', authenticateToken, games.findOne)
router.post('/', authenticateToken, games.create)
router.patch('/:id', authenticateToken, games.update)
router.delete('/:id', authenticateToken, games.delete)


module.exports = router;