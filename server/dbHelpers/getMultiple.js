const query = require("./query");
const emptyOrRows = require("./emptyOrRows");

module.exports = async function getMultiple(filtrosql) {
  const rows = await query(`SELECT * FROM ${filtrosql} ;`);
  const data = emptyOrRows(rows);

  return {
    data,
  };
};
