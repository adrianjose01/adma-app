const express = require("express");
const admaController = require("../controllers/adma");
const router = express.Router();

router.get("/api/get-names", admaController.getFiltroNombreFactura);

router.get("/api/get-total-pending", admaController.getTotalPending);

router.get("/api/get-total-debts", admaController.getTotalIndividualDebts);

router.get("/api/get-inquilinos", admaController.getInquilinos);

router.get("/api/get-locales", admaController.getLocales);

router.post("/api/add-local", admaController.addLocales);

router.put("/api/edit-local", admaController.editLocales);

router.get("/api/get-facturas/:inqId", admaController.getFacturas);

router.get("/api/get-factura/:facturaId", admaController.getReceiveFactura);

router.get("/api/get-debt/:inqId", admaController.getdebt);

router.post("/api/pay-factura", admaController.payfactura);

router.post("/api/add-inquilino", admaController.addInquilino);

router.put("/api/edit-inquilino", admaController.editInqulino);

router.post("/api/delete-local", admaController.deleteLocal);

router.post("/api/delete-inq", admaController.deleteInq);

module.exports = router;
