const Sequelize= require("sequelize");
const {DataTypes} = Sequelize;
const connection = require("../dataBase/connection");
const UsersModel = require("./UsersModel");
const OwnersAddressModel = require("./OwnersAddressModel");

const OwnersPlacesModel = connection.define("Owners_places", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  whatsapp: {
    type:Sequelize.BIGINT,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

// OwnersPlaces table relationships
UsersModel.hasOne(OwnersPlacesModel);
OwnersPlacesModel.belongsTo(UsersModel);

OwnersAddressModel.hasOne(OwnersPlacesModel);
OwnersPlacesModel.belongsTo(OwnersAddressModel);

OwnersPlacesModel.sync({ force: true });

module.exports = OwnersPlacesModel;
