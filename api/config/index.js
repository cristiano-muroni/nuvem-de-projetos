const Sequelize = require('sequelize');
const sequelize = new Sequelize('nuvem_projetos','root', 'root', {
    host: 'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then( () => {
    console.log("conectado com sucesso")

}).catch((error) => {
    console.log("Falha ao se conectar" + error)
});

exports = sequelize;