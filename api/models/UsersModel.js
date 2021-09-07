const { NUMBER, Sequelize, DataTypes } = require("sequelize/types");
const connection = require("../dataBase/connection");

const UsersModel = sequelize.define("Users", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

UsersModel.sync({force: true});

module.exports = UsersModel;
