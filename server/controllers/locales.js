const query = require("../dbHelpers/query");
const getMultiple = require("../dbHelpers/getMultiple");

exports.deleteLocal = async (req, res, next) => {
  const { localId } = req.body;
  const datos = await query(`DELETE FROM local WHERE localId = ?;`, [localId]);
  res.json(datos);
};

exports.getLocales = async (req, res, next) => {
  const locales = await getMultiple("local");
  res.json(locales);
};

exports.addLocales = async (req, res, next) => {
  const { nombre, descripcion, valor } = req.body;
  const datos = await query(
    `INSERT INTO local(nombre, descripcion, valor) VALUES ("?", "?", ?);`,
    [nombre, descripcion, valor]
  );
  res.json(datos);
};

exports.editLocales = async (req, res, next) => {
  const { nombre, descripcion, monto, localId } = req.body;
  const datos = await query(
    `UPDATE local SET nombre = '?', descripcion = '?', valor = ? WHERE localId = ?`,
    [nombre, descripcion, monto, localId]
  );
  res.json(datos);
};
