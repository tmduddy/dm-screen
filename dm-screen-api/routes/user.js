const express = require('express');


const users = require("../views/user");
const { authenticateToken } = require('../views/middleware');

const router = express.Router();
// Create a new user
router.post("/signup", users.create);
router.post("/login", users.login)

// Delete a user with id
router.delete("/:id", authenticateToken, users.delete);



module.exports = router;