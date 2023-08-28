const query = require("../dbHelpers/query");
const emptyOrRows = require("../dbHelpers/emptyOrRows");

exports.getInquilinos = async (req, res, next) => {
  const inqulinos = await query(
    "SELECT I.inquilinosId, I.nombre, I.fecha_pago, I.cedula, I.direccion, I.telefono, L.nombre AS local, L.valor, I.nombreGarante, I.cedulaGarante, I.telefonoGarante, I.direccionGarante FROM inquilinos I INNER JOIN local L ON I.localId = L.localId GROUP BY inquilinosId;"
  );

  res.json(emptyOrRows(inqulinos));
};

exports.addInquilino = async (req, res, next) => {
  const {
    nombre,
    cedula,
    telefono,
    direccion,
    localId,
    fecha,
    nombreGarante,
    cedulaGarante,
    telefonoGarante,
    direccionGarante,
  } = req.body;
  const datos = await query(
    `INSERT INTO inquilinos(nombre, cedula, telefono, direccion, localId, fecha_pago, nombreGarante, cedulaGarante, telefonoGarante, direccionGarante) VALUES ('?', '?', '?', '?', ?, '?', '?', '?', '?', '?')`,
    [
      nombre,
      cedula,
      telefono,
      direccion,
      localId,
      fecha,
      nombreGarante,
      cedulaGarante,
      telefonoGarante,
      direccionGarante,
    ]
  );
  res.json(datos);
};

exports.editInqulino = async (req, res, next) => {
  const {
    nombre,
    cedula,
    telefono,
    direccion,
    inqId,
    nombreGarante,
    cedulaGarante,
    telefonoGarante,
    direccionGarante,
  } = req.body;
  const datos = await query(
    `UPDATE inquilinos SET nombre = '?', cedula = '?', telefono = '?', direccion = '?', nombreGarante = '?', cedulaGarante = '?', telefonoGarante = '?', direccionGarante = '?' WHERE inquilinosId = ?;`,
    [
      nombre,
      cedula,
      telefono,
      direccion,
      nombreGarante,
      cedulaGarante,
      telefonoGarante,
      direccionGarante,
      inqId,
    ]
  );
  res.json(datos);
};

exports.deleteInq = async (req, res, next) => {
  const { inqId } = req.body;
  const datos = await query(`DELETE FROM inquilinos WHERE inquilinosId = ?;`, [
    inqId,
  ]);
  res.json(datos);
};
