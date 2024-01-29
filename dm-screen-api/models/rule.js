const Game = require("./game").Game;

module.exports = (sequelize, Sequelize) => {
    const Rule = sequelize.define("rule", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
    Rule.associate = (models) => {
      Rule.belongsToMany(Game, { through: 'GameRules'});
    };
    return Rule;
  };