const express = require("express");
const router = express.Router();
const {getCategories, createANewCatogry } = require("./controllers"); 

router.get("/",  getCategories);
router.post("/",   createANewCatogry);


module.exports = router;


