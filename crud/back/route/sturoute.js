const express = require("express");
const router = express.Router();
const stuController = require('../controller/stucontroller');

router.post("/saveform", stuController.SaveForm);
router.get("/getdata", stuController.GetData);

module.exports = router;

