const query = require("./query");

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = async function getMultiple(filtrosql) {
  const rows = await query(`SELECT * FROM ${filtrosql} ;`);
  const data = emptyOrRows(rows);

  return {
    data,
  };
};
