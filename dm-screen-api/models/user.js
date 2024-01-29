const Game = require("./game").Game

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      passwordHash: {
        type: Sequelize.STRING
      }
    });
  
    User.associate = (models) => {
      User.hasMany(Game);
    };
    return User;
  };