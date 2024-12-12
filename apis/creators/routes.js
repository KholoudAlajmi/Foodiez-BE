const express = require("express");
const router = express.Router();
const { getAllCreators, createCreator } = require("./controllers");

router.get("/", getAllCreators);
router.post('/', createCreator)


module.exports = router;


