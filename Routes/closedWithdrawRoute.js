const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Closed = require("../models/Withdraw")
const checkAuth = require("../middleware/check-auth")
router.get("/", checkAuth, (req, res, next) =>{
    console.log(req.query.metamask_address)
    Closed.find(({ $and : [{metamask_address: req.query.metamask_address} , {$or:[{status: "rejected"}, {status:"paid"}]} ]} ))
    .then(result =>{
        res.status(200).json({
            open_requests: result
        });
       })
})

module.exports = router;