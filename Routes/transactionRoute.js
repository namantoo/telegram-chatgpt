const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Transaction = require("../models/Transactions")
const checkAuth = require("../middleware/check-auth")
router.get("/", checkAuth, (req, res, next) =>{
    console.log(req.query.metamask_address)
    Transaction.find(({metamask_address: req.query.metamask_address}), function(err, val){
        res.send(val);
    })
})

module.exports = router;