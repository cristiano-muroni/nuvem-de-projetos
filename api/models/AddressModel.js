const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");

const AddressModel = connection.define("Address", {
  street: {
    type: Sequelize.TEXT,
    allowNull: false
    
  },
  district: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  number_home: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cep: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  geo: {
    type: Sequelize.GEOGRAPHY,
    allowNull: false
  }
});

AddressModel.sync({force: true});

module.exports = AddressModel;
