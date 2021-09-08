const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");

const OperatorsModel = connection.define("Users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id_employee: { // employee registration number
    type:Sequelize.STRING,
    allowNull: false,
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

OperatorsModel.sync({force: true});

module.exports = OperatorsModel;
