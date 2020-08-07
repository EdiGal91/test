const { Sequelize } = require('sequelize');
const { DATABASE_URL } = require('./config');
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

module.exports.connect = async function () {
    await sequelize.authenticate();
}
