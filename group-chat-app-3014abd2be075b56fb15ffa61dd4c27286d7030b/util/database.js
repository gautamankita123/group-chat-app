const Sequelize = require('sequelize');

const sequelize = new Sequelize('expence', 'root', 'mysql@1234', {
    host: 'your_host',
    dialect: 'mysql'
});

module.exports = sequelize;
