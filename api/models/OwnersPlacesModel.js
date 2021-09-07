const { NUMBER, Sequelize, DataTypes } = require("sequelize/types");
const connection = require("../dataBase/connection");

const OwnersPlacesModel = sequelize.define("Customers", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  whatsapp: {
    type: DataTypes.BIGINT,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

OwnersPlacesModel.sync({force: true});

module.exports = OwnersPlacesModel;
