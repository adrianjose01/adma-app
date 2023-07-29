const query = require("../dbHelpers/query");
const emptyOrRows = require("../dbHelpers/emptyOrRows");
const getMultiple = require("../dbHelpers/getMultiple");

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
    "SELECT I.inquilinosId, I.nombre, I.fecha_pago, I.cedula, I.direccion, I.telefono, L.nombre AS local, L.valor, SUM(F.valor) - SUM(F.valor_pagado) AS deuda FROM inquilinos I INNER JOIN local L ON I.localId = L.localId INNER JOIN facturas F ON I.inquilinosId = F.inquilinosId GROUP BY inquilinosId;"
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

exports.getFacturas = async (req, res, next) => {
  const facturas = await getMultiple("facturas");
  res.json(facturas);
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
