const express = require("express");
const router = express.Router();
const { getAllIngredients, createIngredient, deleteIngredient } = require("./conrollers");


router.get('/', getAllIngredients);
router.post("/", createIngredient);
router.delete('/:Id', deleteIngredient);


module.exports = router;


