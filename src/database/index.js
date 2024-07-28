const sequelize = require("./database")

const User = require('./models/users');

sequelize.sync();

module.exports = {
  User,
  sequelize
};