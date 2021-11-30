const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");
const UsersModel = require("./UsersModel");

const OperatorsModel = connection.define("Operadors", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id_employee: { // employee registration number
    type:Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  cpf: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Job_Role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sector: {
    type:Sequelize.STRING,
    allowNull: false,
  },
  level: {
    type: Sequelize.STRING, // editor, admin, view
    allowNull: false,
  },
});

// Operators table relationships
UsersModel.hasOne(OperatorsModel);
OperatorsModel.belongsTo(UsersModel);

OperatorsModel.sync({ force: true });

module.exports = OperatorsModel;
