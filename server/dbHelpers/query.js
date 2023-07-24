const dbconfig = require("../dbconfig");
const mysql = require("mysql2/promise");

module.exports = async function query(sql) {
  const connection = await mysql.createConnection(dbconfig.db);
  const [results] = await connection.execute(sql);

  connection.end();
  return results;
};
