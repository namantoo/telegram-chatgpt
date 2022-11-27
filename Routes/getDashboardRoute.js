const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Dashboard = require("../models/Dashboard")
const checkAuth = require("../middleware/check-auth")
//edit_start
router.get("/",checkAuth, (req, res, next) =>{
    Dashboard.find()
    .then(result =>{
    var aum  = 0;
     res.status(200).json({
         Dashboard: result
     });
     console.log(result.length)
     for (let i = 0; i < result.length; i++) {
       aum = aum + result[i].current_principal
      }
      console.log(result[0].todays_earning);
    })
    .catch(err => {
     res.status(500).json({
         error: err
     })
    })
})

module.exports = router;