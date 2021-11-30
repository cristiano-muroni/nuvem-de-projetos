const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");

const ProjectsAddressModel = connection.define("ProjectAddress", {
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

ProjectsAddressModel.sync({ force: true });

module.exports = ProjectsAddressModel;
