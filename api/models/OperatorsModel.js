const { NUMBER, Sequelize, DataTypes } = require("sequelize/types");
const connection = require("../dataBase/connection");

const OperatorsModel = sequelize.define("Users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_employee: { // employee registration number
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Job_Role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING, // editor, admin, view
    allowNull: false,
  },
});

OperatorsModel.sync({force: true});

module.exports = OperatorsModel;
