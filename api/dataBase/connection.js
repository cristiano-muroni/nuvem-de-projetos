const Sequelize = require("sequelize");
const connection = new Sequelize("nuvem_projetos", "root", "root", {
  dialect: "mysql",
  host: "127.0.0.1",
});

module.exports = connection;
