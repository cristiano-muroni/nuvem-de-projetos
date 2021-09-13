const Sequelize = require("sequelize");
const connection = require("../dataBase/connection");
const OwnersPlacesModel = require("./OwnersPlacesModel");
const AddressModel = require("./AddressModel");
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
  documents_owner_work: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Projects table relationships
AddressModel.hasOne(ProjectsModel);
ProjectsModel.belongsTo(AddressModel, {
  foreignKey: {
    name: "place",
  },
});

CustomersModel.hasOne(ProjectsModel);
ProjectsModel.belongsTo(CustomersModel, {
  foreignKey: {
    name: "project_author",
  },
});

OwnersPlacesModel.hasOne(ProjectsModel);
ProjectsModel.belongsTo(OwnersPlacesModel);

// Customers table relationships
UsersModel.hasOne(CustomersModel);
CustomersModel.belongsTo(UsersModel);

AddressModel.hasOne(CustomersModel);
CustomersModel.belongsTo(AddressModel);

ProjectsModel.hasOne(CustomersModel);
CustomersModel.hasMany(ProjectsModel, {
  foreignKey: {
    name: "project_author",
  },
});

// OwnersPlaces table relationships
UsersModel.hasOne(OwnersPlacesModel);
OwnersPlacesModel.belongsTo(UsersModel);

AddressModel.hasOne(OwnersPlacesModel);
OwnersPlacesModel.belongsTo(AddressModel);

ProjectsModel.hasOne(OwnersPlacesModel);
OwnersPlacesModel.hasMany(ProjectsModel);

// Operators table relationships
UsersModel.hasOne(OperatorsModel);
OperatorsModel.belongsTo(UsersModel);

// "CAUTION" drop and create all tables , to make in all model files --> ProjectsModel.sync({ force: true });

module.exports = ProjectsModel;
