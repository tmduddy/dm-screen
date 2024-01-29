const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
db.games = require("./game.js")(sequelize, Sequelize);
db.characters = require("./character.js")(sequelize, Sequelize);
db.items = require("./item.js")(sequelize, Sequelize);
db.stores = require("./store.js")(sequelize, Sequelize);
db.rules = require("./rule.js")(sequelize, Sequelize);

module.exports = db;