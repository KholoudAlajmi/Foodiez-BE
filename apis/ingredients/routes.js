const express = require("express");
const router = express.Router();
const { createANewIngredient, getIngredients, deleteIngredient1 } = require("./controllers");

router.get("/", getIngredients);
router.post("/", createANewIngredient);
router.delete("/:accountId", deleteIngredient1);


module.exports = router;


