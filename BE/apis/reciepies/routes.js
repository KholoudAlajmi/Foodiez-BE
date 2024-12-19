const express = require("express");
const router = express.Router();
const { getAllRecpies, createRecpie, updateRecpie, deleteRecpie, addIngrediantToRecipe } = require("./controllers");

router.get("/", getAllRecpies);
router.post("/add/recipe", createRecpie);
router.delete("/:Id", deleteRecpie);
router.put("/:Id", updateRecpie);
router.post("/:recId/add/:ingId", addIngrediantToRecipe)

module.exports = router;


