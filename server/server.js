const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
/*
const config = {
  db: {
    host: "adma.mysql.database.azure.com",
    user: "adma",
    password: "Jose8745!",
    database: "adma",
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

async function query(sql) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql);

  connection.end();
  return results;
}

async function getMultiple(filtrosql) {
  const rows = await query(`SELECT * FROM ${filtrosql} ;`);
  const data = emptyOrRows(rows);

  return {
    data,
  };
}

app.get("/api", (req, res, next) => {
  res.json({ response: "Estoy funcionando" });
});

app.post("/create-user", async (req, res, next) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const monto = req.body.monto;
  const pendiente = req.body.pendiente;
  const idLocal = req.body.local;
  const dia = new Date().getDate();
  const mes = new Date().getMonth();
  const year = new Date().getFullYear();
  res.json(req.body);
  await query(
    `INSERT INTO INQUILINOS VALUES (${id}, '${nombre}', ${monto}, '${year}-${mes}-${dia}', ${pendiente}, ${idLocal})`
  );
});

app.get("/users", async (req, res, next) => {
  const data = await getMultiple("INQUILINOS");
  res.json(data);
});

app.delete("/delete/:id", async (req, res, next) => {
  const idUser = req.params.id;
  console.log(idUser);
  await query(`DELETE FROM INQUILINOS WHERE ID = ${idUser}`);
  next();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running in the port: ${PORT}`);
});  */
