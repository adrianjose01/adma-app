const express = require("express");
const admaController = require("../controllers/adma");
const localesController = require("../controllers/locales");
const inquilinosController = require("../controllers/inquilinos");
const facturasController = require("../controllers/facturas");
const router = express.Router();

router.get("/api/get-total-pending", admaController.getTotalPending);

router.get("/api/get-total-debts", admaController.getTotalIndividualDebts);

router.get("/api/get-debt/:inqId", admaController.getdebt);

// FACTURA RELATED
router.get("/api/get-names", facturasController.getFiltroNombreFactura);

router.get("/api/get-facturas/:inqId", facturasController.getFacturas);

router.get("/api/get-factura/:facturaId", facturasController.getReceiveFactura);

router.post("/api/pay-factura", facturasController.payfactura);

// INQUILINOS RELATED
router.get("/api/get-inquilinos", inquilinosController.getInquilinos);

router.post("/api/add-inquilino", inquilinosController.addInquilino);

router.put("/api/edit-inquilino", inquilinosController.editInqulino);

router.post("/api/delete-inq", inquilinosController.deleteInq);

// LOCALES RELATED
router.get("/api/get-locales", localesController.getLocales);

router.post("/api/delete-local", localesController.deleteLocal);

router.post("/api/add-local", localesController.addLocales);

router.put("/api/edit-local", localesController.editLocales);

module.exports = router;
