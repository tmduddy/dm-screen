const crypto = require("crypto");
const jwt = require("jsonwebtoken")

exports.hashWithSalt = (input) => {
    let saltedInput = input + process.env.SALT;
    let hashedInput = crypto.createHash('sha256').update(saltedInput).digest('hex');
    return hashedInput;
}

exports.generateAccessToken = (userId) => {
    return jwt.sign({userId: userId}, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRE_TIME });
  }