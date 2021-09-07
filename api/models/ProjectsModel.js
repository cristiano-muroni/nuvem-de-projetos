const { NUMBER, Sequelize, DataTypes } = require("sequelize/types");
const connection = require("../dataBase/connection");
const Customers = require("./CustomersModel");
const OwnersPlacesModel = require("./OwnersPlacesModel");
const AddressModel = require("./AddressModel");
const CustomersModel = require("./CustomersModel");
const UsersModel = require("./UsersModel");

const ProjectsModel = sequelize.define("Projects", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  typology: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  definition: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE(6),
    allowNull: false,
  },
  samae_paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  protocol_paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  documents_owner_work: {
    type: DataTypes.STRING,
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
