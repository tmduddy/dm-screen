const { DataTypes } = require("sequelize");
const Rule = require("./rule")

module.exports = (sequelize, Sequelize) => {
    const StoreItems = sequelize.define('StoreItems', {
        storeId: {
          type: DataTypes.INTEGER,
          references: {
            model: Store,
            key: 'id'
          }
        },
        itemId: {
          type: DataTypes.INTEGER,
          references: {
            model: Item,
            key: 'id'
          }
        },
        quantity: {
            type: DataTypes.INTEGER
        }
      });

      return StoreItems
  };