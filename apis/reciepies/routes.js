const express = require("express");
const router = express.Router();
const { getAllRecpies, createRecpie, updateRecpie, deleteRecpie } = require("./controllers");

router.get("/", getAllRecpies);
router.post("/", createRecpie);
router.delete("/:Id", deleteRecpie);
router.put("/:Id", updateRecpie);

module.exports = router;


