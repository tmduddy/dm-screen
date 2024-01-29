const Character = require("./character").Character;
const User = require("./user").User;
const Rule = require("./rule").Rule;

module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game", {
      name: {
        type: Sequelize.STRING
      },
      gameType: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
    Game.associate = (models) => {
      Game.belongsToOne(User);
      Game.hasMany(Character);
      Game.belongsToMany(Rule, { through: 'GameRules' })
    };
    return Game;
  };