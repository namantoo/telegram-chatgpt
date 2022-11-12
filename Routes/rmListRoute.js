const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Rm = require("../models/Rm")
const checkAuth = require("../middleware/check-auth")
router.get("/", checkAuth, (req, res, next) =>{
    Rm.find()
    .then(result =>{
     res.status(200).json({
         Relationship_managers: result
     });
    })
    .catch(err => {
     res.status(500).json({
         error: err
     })
    })
})

module.exports = router;