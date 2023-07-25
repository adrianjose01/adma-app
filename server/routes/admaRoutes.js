const express = require("express");
const admaController = require("../controllers/adma");
const router = express.Router();

router.get("/get-total-pending", admaController.getTotalPending);

router.get("/get-total-debts", admaController.getTotalIndividualDebts);

router.get("/get-inquilinos", admaController.getInquilinos);

module.exports = router;
