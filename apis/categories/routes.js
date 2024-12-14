const express = require("express");
const router = express.Router();
const {getCategoriess, createANewcategories,updatesAnCategories,
    getCategories} = require("./controllers"); 
const upload = require("../../middleware/multer");

router.get("",  getCategoriess); 
router.get('/:username',  getCategories); 
router.post("/:categoryId",  createANewcategories); 
router.put("/:accountId",  updatesAnCategories); 



// User Create
router.post('/', upload.single('image'), userCreate);

// User Update
router.put('/:postId', upload.single('image'), userUpdate);
module.exports = router;


