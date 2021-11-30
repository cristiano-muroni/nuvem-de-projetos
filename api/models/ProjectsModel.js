const Sequelize = require("sequelize");
const connection = require("../dataBase/connection");
const OwnersPlacesModel = require("./OwnersPlacesModel");
const OwnersAddressModel = require("./OwnersAddressModel");
const ProjectsAddressModel = require("./ProjetcsAddressModel");
const CustomersModel = require("./CustomersModel");
const UsersModel = require("./UsersModel");
const OperatorsModel = require("./OperatorsModel");

const ProjectsModel = connection.define("Projects", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  typology: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  type: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  definition: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  samae_paid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  protocol_paid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  approved: {
    type: Sequelize.BOOLEAN,
  },
  stage: {
    type: Sequelize.INTEGER, //A number from 1 to 3 is expected to indicate the stage the project is at.
    allowNull: false,
  },
  finished: {
    type: Sequelize.BOOLEAN, //expected yes or not to indicate that the project is finished or not.
    allowNull: false,
  },
  documents_owner_work: { //documents of owner place
    type: Sequelize.STRING,
    allowNull: false,
  },
  project_file: {  //files of property plan
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Projects table relationships
ProjectsAddressModel.hasMany(ProjectsModel);
ProjectsModel.belongsTo(ProjectsAddressModel);

CustomersModel.hasMany(ProjectsModel);
ProjectsModel.belongsTo(CustomersModel);

OwnersPlacesModel.hasMany(ProjectsModel);
ProjectsModel.belongsTo(OwnersPlacesModel);

ProjectsModel.belongsTo(OwnersPlacesModel);
OwnersPlacesModel.hasMany(ProjectsModel);
 
ProjectsModel.sync({ force: true });

module.exports = ProjectsModel;
