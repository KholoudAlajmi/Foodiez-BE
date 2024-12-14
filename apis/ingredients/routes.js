const express = require("express");
const router = express.Router();
const {getIngredients, createANewIngredient,ingredientsGet,
    } = require("./controllers"); 
const upload = require("../../middleware/multer");

router.get("",  getIngredients); 
router.post("/",  createANewIngredient); 
router.get('/:name/:ingredientId',  ingredientsGet);


  // User Create
  router.post('/', upload.single('image'), userCreate);

  // User Update
  router.put('/:postId', upload.single('image'), userUpdate);
module.exports = router;


