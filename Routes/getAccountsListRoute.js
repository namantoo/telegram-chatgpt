const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Accounts = require("../models/Profile")
const checkAuth = require("../middleware/check-auth")
router.get("/",checkAuth, (req, res, next) =>{
    Accounts.find()
    .then(result =>{
     res.status(200).json({
         Notifications: result
     });
    })
    .catch(err => {
     res.status(500).json({
         error: err
     })
    })
})

module.exports = router;