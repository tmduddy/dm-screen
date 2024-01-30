const db = require("../models");

const User = db.users;
const Op = db.Sequelize.Op;
const crypto = require('crypto');
const { hashWithSalt, generateAccessToken } = require("../shared/crypto_utils");

// Create and Save a new User
exports.create = (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            message: "username and password are both required"
          });
          return;
    }

    const usernameCondition = {
        username: { [Op.like]: `%${req.body.username}%` }
    }
    
    User.findAll({ where: usernameCondition}).then(data => {
        const usernameTaken = data.length > 0;
        if (usernameTaken) {
            res.status(400).send({
                message: `username ${req.body.username} is already taken, try another`
            })
            return;
        }
    
        // salt + hash password
        const saltedPassword = req.body.password + process.env.SALT;
        let hashedPassword = hashWithSalt(saltedPassword);
    
        const user = {
            username: req.body.username,
            passwordHash: hashedPassword,
        }
    
        User.create(user).then(data => {
            let token = generateAccessToken(data.id.toString())
            res.send(token)
        }).catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
    });
    
}

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const userId = req.userId;
  const idToDelete = req.params.id;

  if (userId != idToDelete) {
    res.status(403).send({
        message: "invalid user ID provided. You can only delete your own user."
    })
    return;
  }

  User.destroy({
    where: {id: idToDelete}
  }).then(numDeleted => {
    if (numDeleted == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe the user was not found!`
        });
      }
  }).catch(err => {
    res.status(500).send({
      message: "Could not delete user with id=" + idToDelete
    });
  });

};

// login
exports.login = (req, res) => {
    if (!req.body.username || ! req.body.password) {
        res.status(400).send({message: "username and password required"})
    }
    const username = req.body.username;
    const password = req.body.password;
    let condition = {
        username: { [Op.like]: `%${username}%` },
        passwordHash: { [Op.eq]: hashWithSalt(password)}
    }

    User.findOne(
        { where: condition}
    ).then( data => {
        if (data === null) {
            res.status(403).send({message: "invalid username or password"});
            return;
        }
        const userId = data.id.toString();
        let token = generateAccessToken(userId);
        res.json(token);
    }).catch( err => {
        res.send({message: err.message || "oops, error"});
    });
}