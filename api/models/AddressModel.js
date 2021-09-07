const { NUMBER, Sequelize, DataTypes } = require("sequelize/types");
const connection = require("../dataBase/connection");

const AddressModel = sequelize.define("Address", {
  street: {
    type: DataTypes.TEXT,
    allowNull: false
    
  },
  district: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  number_home: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cep: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  geo: {
    type: DataTypes.GEOGRAPHY,
    allowNull: false
  }
});

AddressModel.sync({force: true});

module.exports = AddressModel;
