const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");

const CustomersModel = connection.define("Customers", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
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
    type: Sequelize.BIGINT,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING,
  },
  cau: {
    type: Sequelize.STRING,
  },
  crea: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  rnp: {
    type: Sequelize.STRING,
  },
  record: {
    type: Sequelize.STRING,
  }
});

CustomersModel.sync({force: true});

module.exports = CustomersModel;
