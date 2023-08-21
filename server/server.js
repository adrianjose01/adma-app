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

app.use(admaRoutes);

let data = [];

const generarFactura = async () => {
  data = await query(
    "SELECT I.inquilinosId, I.nombre, I.fecha_pago, I.cedula, I.direccion, I.telefono, L.nombre AS local, L.valor FROM inquilinos I INNER JOIN local L ON I.localId = L.localId GROUP BY inquilinosId;"
  );

  // data.forEach((inq, i) => {
  //   if (
  //     String(inq.fecha_pago).slice(8, 10) ==
  //     new Date().toLocaleTimeString().slice(6, 8)
  //   ) {
  //     console.log("Generando Factura");
  //   }
  // });
};

generarFactura();

setInterval(async () => {
  // console.log("Running interval");
  // data.forEach((inq, i) => {
  //   if (
  //     String(inq.fecha_pago).slice(8, 10) === new Date().getSeconds().toString()
  //   ) {
  //     console.log(inq);
  //     query(
  //       `INSERT INTO facturas(nombre, valor, fecha_factura, valor_pagado, inquilinosId) VALUES ('${
  //         inq.nombre
  //       }', ${inq.valor}, '${new Date().toISOString().slice(0, 10)}', 0, ${
  //         inq.inquilinosId
  //       });`
  //     );
  //   }
  // });
}, 10000);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running in the port: ${PORT}`);
});
