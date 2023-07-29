const express = require("express");
const admaController = require("../controllers/adma");
const router = express.Router();

router.get("/get-total-pending", admaController.getTotalPending);

router.get("/get-total-debts", admaController.getTotalIndividualDebts);

router.get("/get-inquilinos", admaController.getInquilinos);

router.get("/get-locales", admaController.getLocales);

router.post("/add-local", admaController.addLocales);

router.get("/get-facturas", admaController.getFacturas);

router.get("/get-factura/:facturaId", admaController.getReceiveFactura);

router.get("/get-debt/:inqId", admaController.getdebt);

module.exports = router;
