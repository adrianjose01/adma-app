const query = require("../dbHelpers/query");
const emptyOrRows = require("../dbHelpers/emptyOrRows");

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

exports.getdebt = async (req, res, next) => {
  const { inqId } = req.params;
  const data = await query(
    `SELECT I.nombre, SUM(F.valor) - SUM(F.valor_pagado) AS deuda FROM inquilinos I INNER JOIN facturas F ON I.inquilinosId = F.inquilinosId WHERE I.inquilinosId = ? GROUP BY I.nombre;
  `,
    [inqId]
  );
  res.json(emptyOrRows(data));
};
