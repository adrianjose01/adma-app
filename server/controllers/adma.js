const query = require("../dbHelpers/query");
const emptyOrRows = require("../dbHelpers/emptyOrRows");
const getMultiple = require("../dbHelpers/getMultiple");

exports.getFiltroNombreFactura = async (req, res, next) => {
  const data = await query(
    "SELECT DISTINCT nombre, inquilinosId FROM facturas;"
  );
  res.send(emptyOrRows(data));
};

exports.getTotalPending = async (req, res, next) => {
  const totalPending = await query(
    "SELECT SUM(valor) - SUM(valor_pagado) AS totalPendiente FROM facturas WHERE paga = 0;"
  );
  res.json(totalPending);
};

exports.getTotalIndividualDebts = async (req, res, next) => {
  const totalDebts = await query(
    "SELECT I.nombre, SUM(F.valor) - SUM(F.valor_pagado) AS deuda FROM inquilinos I INNER JOIN facturas F ON I.inquilinosId = F.inquilinosId GROUP BY I.nombre;"
  );
  res.json(totalDebts);
};

exports.getInquilinos = async (req, res, next) => {
  const inqulinos = await query(
    "SELECT I.inquilinosId, I.nombre, I.fecha_pago, I.cedula, I.direccion, I.telefono, L.nombre AS local, L.valor FROM inquilinos I INNER JOIN local L ON I.localId = L.localId GROUP BY inquilinosId;"
  );

  res.json(emptyOrRows(inqulinos));
};

exports.getLocales = async (req, res, next) => {
  const locales = await getMultiple("local");
  res.json(locales);
};

exports.addLocales = async (req, res, next) => {
  const { nombre, descripcion, valor } = req.body;
  const datos = await query(
    `INSERT INTO local(nombre, descripcion, valor) VALUES ("${nombre}", "${descripcion}", ${valor});`
  );
  res.json(datos);
};

exports.editLocales = async (req, res, next) => {
  const { nombre, descripcion, monto, localId } = req.body;
  const datos = await query(
    `UPDATE local SET nombre = '${nombre}', descripcion = '${descripcion}', valor = ${monto} WHERE localId = ${localId}`
  );
  res.json(datos);
};

exports.getFacturas = async (req, res, next) => {
  const { inqId } = req.params;
  let sql = "";
  if (inqId === "Todos") {
    sql = `SELECT * FROM facturas`;
  } else {
    sql = `SELECT * FROM facturas where inquilinosId = ${inqId}`;
  }

  res.json(emptyOrRows(await query(sql)));
};

exports.getReceiveFactura = async (req, res, next) => {
  const { facturaId } = req.params;
  const datos = await query(
    `SELECT * FROM facturas WHERE facturaId = ${facturaId};`
  );
  res.json(emptyOrRows(datos));
};

exports.getdebt = async (req, res, next) => {
  const { inqId } = req.params;
  const data =
    await query(`SELECT I.nombre, SUM(F.valor) - SUM(F.valor_pagado) AS deuda FROM inquilinos I INNER JOIN facturas F ON I.inquilinosId = F.inquilinosId WHERE I.inquilinosId = ${inqId} GROUP BY I.nombre;
  `);
  res.json(emptyOrRows(data));
};

exports.payfactura = async (req, res, next) => {
  const { valorPagado, facturaId } = req.body;
  const datos = await query(
    `UPDATE facturas SET valor_pagado = ${valorPagado} WHERE facturaId = ${facturaId};`
  );
  res.json(datos);
};

exports.addInquilino = async (req, res, next) => {
  const { nombre, cedula, telefono, direccion, localId, fecha } = req.body;
  const datos = await query(
    `INSERT INTO inquilinos(nombre, cedula, telefono, direccion, localId, fecha_pago) VALUES ('${nombre}', '${cedula}', '${telefono}', '${direccion}', ${localId}, '${fecha}')`
  );
  res.json(datos);
};

exports.editInqulino = async (req, res, next) => {
  const { nombre, cedula, telefono, direccion, inqId } = req.body;
  const datos = await query(
    `UPDATE inquilinos SET nombre = '${nombre}', cedula = '${cedula}', telefono = '${telefono}', direccion = '${direccion}' WHERE inquilinosId = ${inqId}; `
  );
  res.json(datos);
};

exports.deleteLocal = async (req, res, next) => {
  const { localId } = req.body;
  const datos = await query(`DELETE FROM local WHERE localId = ${localId};`);
  res.json(datos);
};

exports.deleteInq = async (req, res, next) => {
  const { inqId } = req.body;
  const datos = await query(
    `DELETE FROM inquilinos WHERE inquilinosId = ${inqId};`
  );
  res.json(datos);
};
