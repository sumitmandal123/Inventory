const { Sequelize } = require('sequelize');

const connectDB = async () =>{
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_SERVER_ADDRESS,
        dialect: 'mssql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
      });
    
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports =  connectDB;

