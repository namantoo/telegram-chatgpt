const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const PrivateNotice = require("../models/PrivateNotice")
const checkAuth = require("../middleware/check-auth")
router.get("/", checkAuth, (req, res, next) =>{
  
    console.log(req.query.metamask_address)
     PrivateNotice.find(({metamask_address: req.query.metamask_address}), function(err, val){
        res.send(val);
    })
})
router.post("/", checkAuth, (req, res) =>{
   console.log(req.body.metamask_address)
    const private = new PrivateNotice({
        metamask_address: req.body.metamask_address,   
        date_time: new Date(),
        private_notification: req.body.private_notification    
    });
    console.log(private)
    private.save()
    res.send("working")
})



module.exports = router;