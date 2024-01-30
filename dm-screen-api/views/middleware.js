const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.status(401).send({
      message: "You must be logged in to perform this action"
    });
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, userId) => {
      console.log(err);
  
      if (err) return res.status(403).send({
        message: "unable to parse login token. Please logout and log back in."
      });
  
      req.userId = userId.userId;
  
      next();
    })
  }