const Store = require("./store").Store;

module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      username: {
        type: Sequelize.STRING
      },
      passwordHash: {
        type: Sequelize.STRING
      }
    });

    Item.associate = (models) => {
      Item.belongsToMany(Store, { through: StoreItems });
    };
  
    return Item;
  };