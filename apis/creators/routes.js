const express = require("express");
const router = express.Router();
const {getAccounts, createANewaccount,
    deleteAccount,updatesAnAccount,
    getAccount} = require("./controllers"); 

router.get("/",  getAccounts);
router.get('/:username',  getAccount);
router.post("/",  createANewaccount);
router.delete("/:accountId",  deleteAccount);
router.put("/:accountId",  updatesAnAccount);

module.exports = router;


