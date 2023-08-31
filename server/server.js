const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const query = require("./dbHelpers/query");
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const cors = require("cors");
app.use(cors());

const admaRoutes = require("./routes/admaRoutes");

app.use(admaRoutes);

setInterval(async () => {
  await query(
    `INSERT INTO messages(message, created_at) VALUES ('MENSAJE ENVIADO', NOW());`
  ).then((res) => {
    console.log("Mensaje Enviado");
  });
}, 10000);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running in the port: ${PORT}`);
});
