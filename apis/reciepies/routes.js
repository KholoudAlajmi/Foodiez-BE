const express = require("express");
const router = express.Router();
const {getReciepies, updatesAnReciepies, deleteReciepies,createANewReciepies, getReciepies } = require("./controllers"); 

router.get("/",  getReciepies);
router.get('/:username',  getReciepies);
router.post("/",  createANewReciepies);
router.delete("/:ReciepieId",  deleteReciepies);
router.put("/:ReciepieId",  updatesAnReciepies);

module.exports = router;


