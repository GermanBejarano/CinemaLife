const {Sequelize} = require("sequelize");

const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: "mysql",
    logging: false,
});

const dbConnectMySql = async() => {
    try {
        await sequelize.authenticate();
        console.log("MySQL connected");
    } catch (error) {
        console.log("MySQL errro", error);
    }
}

module.exports = {sequelize, dbConnectMySql};