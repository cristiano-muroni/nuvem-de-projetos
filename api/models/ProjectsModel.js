const Sequelize= require("sequelize");
const connection = require("../dataBase/connection");
const OwnersPlacesModel = require("./OwnersPlacesModel");
const AddressModel = require("./AddressModel");
const CustomersModel = require("./CustomersModel");
const UsersModel = require("./UsersModel");


const ProjectsModel = connection.define("Projects", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
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
  date: {
    type: Sequelize.DATE(6),
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
  documents_owner_work: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Projects table relationships
ProjectsModel.belongsTo(AddressModel, {
  foreignKey: {
    name: "place",
  },
});
ProjectsModel.belongsTo(CustomersModel, {
  foreignKey: {
    name: "project_author",
  },
});
ProjectsModel.belongsTo(OwnersPlacesModel);

// Customers table relationships
CustomersModel.belongsTo(UsersModel);
CustomersModel.belongsTo(AddressModel);
CustomersModel.hasMany(ProjectsModel, {
  foreignKey: {
    name: "project_author",
  },
});

// OwnersPlaces table relationships
OwnersPlacesModel.belongsTo(UsersModel);
OwnersPlacesModel.belongsTo(AddressModel);
OwnersPlacesModel.hasMany(ProjectsModel);

// Operators table relationships
OperatorsModel.belongsTo(UsersModel);

ProjectsModel.sync({force: true});

module.exports = ProjectsModel;
