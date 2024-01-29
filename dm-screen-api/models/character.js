const Game = require("./game").Game;

module.exports = (sequelize, Sequelize) => {
    const Character = sequelize.define("character", {
      name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      subClass: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      health: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      armorClass: {
        type: Sequelize.INTEGER
      },
      strength: {
        type: Sequelize.INTEGER
      },
      dexterity: {
        type: Sequelize.INTEGER
      },
      constituion: {
        type: Sequelize.INTEGER
      },
      intelligence: {
        type: Sequelize.INTEGER
      },
      wisdom: {
        type: Sequelize.INTEGER
      },
      charisma: {
        type: Sequelize.INTEGER
      },
    });
    Character.associate = (models) => {
      Character.belongsToOne(Game);
    };
    return Character;
  };