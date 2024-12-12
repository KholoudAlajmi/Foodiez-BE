const express = require("express");
const router = express.Router();
const { getAllCategories, createCategory, deleteCategory } = require("./conrollers");


router.get('/', getAllCategories);
router.post("/", createCategory);
router.delete('/:Id', deleteCategory);


module.exports = router;


