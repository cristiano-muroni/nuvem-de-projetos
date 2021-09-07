const { NUMBER, Sequelize, DataTypes } = require("sequelize/types");
const connection = require("../dataBase/connection");

const CustomersModel = sequelize.define("Customers", {
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
  cnpj: {
    type: DataTypes.STRING,
  },
  cau: {
    type: DataTypes.STRING,
  },
  crea: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  rnp: {
    type: DataTypes.STRING,
  },
  record: {
    type: DataTypes.STRING,
  }
});

CustomersModel.sync({force: true});

module.exports = CustomersModel;
