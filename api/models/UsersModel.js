const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");

const UsersModel = connection.define("Users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,    
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  access: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

UsersModel.sync({ force: true });

module.exports = UsersModel;
