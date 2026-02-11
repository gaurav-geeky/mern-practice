const express = require("express");
const router = express.Router();
const stuController = require('../controller/stucontroller');

router.post("/saveform", stuController.SaveForm);
router.get("/getdata", stuController.GetData);
router.get("/editdata", stuController.EditData);
router.delete("/editdeletedata", stuController.EditDeleteData);
router.get("/editupdatedisplay/:id", stuController.EditDisplay);
router.post("/editsavedata", stuController.EditSave);

module.exports = router;

