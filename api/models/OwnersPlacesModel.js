const Sequelize= require("sequelize");
const {DataTypes} = Sequelize;
const connection = require("../dataBase/connection");

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

// "CAUTION" drop and create all tables , to make in all model files --> "OwnersPlacesModel.sync({force: true});"

module.exports = OwnersPlacesModel;
