const query = require("../dbHelpers/query");
const getMultiple = require("../dbHelpers/getMultiple");
const emptyOrRows = require("../dbHelpers/emptyOrRows");

exports.payfactura = async (req, res, next) => {
  const { valorPagado, facturaId } = req.body;
  const datos = await query(
    `UPDATE facturas SET valor_pagado = ? WHERE facturaId = ?;`,
    [valorPagado, facturaId]
  );
  res.json(datos);
};

exports.getFacturas = async (req, res, next) => {
  const { inqId } = req.params;
  let datos = "";
  if (inqId === "Todos") {
    datos = await getMultiple("facturas");
  } else {
    datos = await query(`SELECT * FROM facturas where inquilinosId = ?`, [
      inqId,
    ]);
  }
  res.json(emptyOrRows(datos));
};

exports.getReceiveFactura = async (req, res, next) => {
  const { facturaId } = req.params;
  const datos = await query(`SELECT * FROM facturas WHERE facturaId = ?;`, [
    facturaId,
  ]);
  res.json(emptyOrRows(datos));
};
