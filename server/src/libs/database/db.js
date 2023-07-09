// const dbConfig = require('../../configs/connectDb')
// const Sequelize = require('sequelize');
// const connectMysql = new Sequelize(dbConfig.db.DATABASE, dbConfig.db.USERNAME, dbConfig.db.PASSWORD, {
//   host: dbConfig.db.HOST,
//   dialect: dbConfig.db.dialect,
// });

// module.exports = connectMysql;

const mysql = require('mysql2');
const dbConfig = require('../../configs/connectDb');

const connectionMySQL = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

connectionMySQL.connect((err) => {
  if (err) throw err;
  console.log('connected');
});

module.exports = connectionMySQL;