const Game = require("./game");
const StoreItems = require("./storeItems")

module.exports = (sequelize, Sequelize) => {
    const Store = sequelize.define("store", {
      name: {
        type: Sequelize.STRING
      },
      shopKeeperName: {
        type: Sequelize.STRING
      }
    });
    
    Store.associate = (models) => {
      Store.belongsToOne(Game);
      Store.belongsToMany(Item, { through: StoreItems })
    };
    
    return Store;
  };