const Sequelize = require("sequelize");
const sequelize = new Sequelize("nuvem_projetos", "root", "root", {
  dialect: "mysql",
  host: "127.0.0.1",
});

try {
  await sequelize.authenticate();
  console.log("DB conectado com sucesso!");
} catch (error) {
  console.error("falha ao se conectar o DB", error);
}

//sequelize.sync().then(() => console.log('synced'));
