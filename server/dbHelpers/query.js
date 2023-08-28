const dbconfig = require("../dbconfig");
const mysql = require("mysql2/promise");

module.exports = async function query(sql, placeholder) {
  const connection = await mysql.createConnection(dbconfig.db);
  const [results] = await connection.execute(sql, placeholder);

  connection.end();
  return results;
};
