const express = require("express");
const router = express.Router();
const { getAllCategories, createCategory, deleteCategory, addRecipeToCategory } = require("./conrollers");


router.get('/', getAllCategories);
router.post("/add/category", createCategory);
router.delete('/:Id', deleteCategory);
router.post('/:categoryId/add/:recId', addRecipeToCategory)


module.exports = router;


