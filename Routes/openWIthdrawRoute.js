const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Open = require("../models/Withdraw")
const checkAuth = require("../middleware/check-auth")
router.get("/", checkAuth, (req, res, next) =>{
    console.log(req.query.metamask_address)
    Open.find(({ $and : [{metamask_address: req.query.metamask_address} , {$or:[{status: "pending"}, {status:"approved"}]} ]} ))
    .then(result =>{
        res.status(200).json({
            open_requests: result
        });
       })
})

module.exports = router;