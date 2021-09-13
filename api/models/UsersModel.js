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
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

// "CAUTION" drop and create all tables , to make in all model files --> UsersModel.sync({force: true});

module.exports = UsersModel;
