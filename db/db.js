const mysql = require("mysql");

const dbConnection = (host, user, password, database) => {
  const connection = mysql.createConnection({
    host,
    user,
    password,
    database,
  });
  return connection;
};
const connection = dbConnection(
  process.env.HOST,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DATABASE
);

// connection.connect((err) => {
//   if (err) throw err;
//   console.log("DB Connected successfully");
// });
module.exports = { connection };
