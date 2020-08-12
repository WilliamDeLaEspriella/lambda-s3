require("dotenv").config();
module.exports = {
    dev: process.env.NODE_ENV !== "production",
    host: process.env.HOST,
    connectionString: process.env.connectionString,
    user_database: process.env.USER_DATABASE,
    password_database: process.env.PASSWORD_DATABASE,
    database: process.env.DATABASE,
    port_database: process.env.PORT_DATABASE,
    port: 3000,
    ssl: process.env.SSL
}