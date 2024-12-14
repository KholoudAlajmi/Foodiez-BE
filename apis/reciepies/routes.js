const express = require("express");
const router = express.Router();
const {getRecipes, createANewrecipe,
    updatesAnRecipe,deleteRecipeController,
    getRecipe,reciepeEnroll,
    reciepesGet} = require("./controllers"); 
const upload = require("../../middleware/multer");

router.get("",  getRecipes); 
router.get('/:name',  getRecipe);
router.post("/",  createANewrecipe);
router.delete("/:recipeId/",  deleteRecipeController); 
router.put("/:recipeId",  updatesAnRecipe); 

router.post('/:recipeId/:ingredientId', reciepeEnroll); 
router.get('/:recipeId/:ingredientId',  reciepesGet);

// User Create
router.post('/', upload.single('image'), userCreate);
// User Update
router.put('/:postId', upload.single('image'), userUpdate);

module.exports = router;


