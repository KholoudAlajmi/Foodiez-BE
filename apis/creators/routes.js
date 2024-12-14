const express = require("express");
const router = express.Router();
const {getCreators, createANewCreator,
    updateCreatorController,
    getCreatorById} = require("./controllers"); 
const upload = require("../../middleware/multer");

router.get("",  getCreators); 
router.get('/:name',  getCreatorById); 
router.post("/",  createANewCreator);
router.put("/:accountId",  updateCreatorController); 



// User Create
router.post('/', upload.single('image'), userCreate);

// User Update
router.put('/:postId', upload.single('image'), userUpdate);
module.exports = router;


