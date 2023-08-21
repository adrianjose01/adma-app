const express = require("express");
const admaController = require("../controllers/adma");
const router = express.Router();

router.get("/api/get-names", admaController.getFiltroNombreFactura);

router.get("/get-total-pending", admaController.getTotalPending);

router.get("/get-total-debts", admaController.getTotalIndividualDebts);

router.get("/get-inquilinos", admaController.getInquilinos);

router.get("/get-locales", admaController.getLocales);

router.post("/add-local", admaController.addLocales);

router.get("/api/get-facturas/:inqId", admaController.getFacturas);

router.get("/get-factura/:facturaId", admaController.getReceiveFactura);

router.get("/get-debt/:inqId", admaController.getdebt);

router.post("/pay-factura", admaController.payfactura);

router.post("/add-inquilino", admaController.addInquilino);

router.put("/edit-inquilino", admaController.editInqulino);

router.post("/delete-local", admaController.deleteLocal);

router.post("/delete-inq", admaController.deleteInq);

module.exports = router;
