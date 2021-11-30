const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");

const OwnersAddressModel = connection.define("OwnerAddress", {
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
  }
});

OwnersAddressModel.sync({ force: true });

module.exports = OwnersAddressModel;