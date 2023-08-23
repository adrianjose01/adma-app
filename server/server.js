const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const query = require("./dbHelpers/query");

const admaRoutes = require("./routes/admaRoutes");
const emptyOrRows = require("./dbHelpers/emptyOrRows");

app.use(admaRoutes);

const generarFactura = async () => {
  return await emptyOrRows(
    query(
      "SELECT I.inquilinosId, I.nombre, I.fecha_pago, I.cedula, I.direccion, I.telefono, L.nombre AS local, L.valor FROM inquilinos I INNER JOIN local L ON I.localId = L.localId GROUP BY inquilinosId;"
    )
  );
};

setInterval(async () => {
  const data = await generarFactura();
  data.forEach(async (inq, i) => {
    let newDate = new Date(inq.fecha_pago);
    const today = new Date();
    if (newDate.getDate() === today.getDate()) {
      await query(
        `INSERT INTO facturas(nombre, valor, fecha_factura, valor_pagado, inquilinosId) VALUES ('${
          inq.nombre
        }', ${
          inq.valor
        }, '${today.getFullYear()}-${today.getMonth()}-${today.getDate()}', 0, ${
          inq.inquilinosId
        });`
      );
    }
  });
}, 86400000);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running in the port: ${PORT}`);
});
