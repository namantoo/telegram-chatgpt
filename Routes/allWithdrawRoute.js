const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Withdraw = require("../models/Withdraw")
const checkAuth = require("../middleware/check-auth")
router.get("/",checkAuth, (req, res, next) =>{
    res.send("working")
})

module.exports = router;