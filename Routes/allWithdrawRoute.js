const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Withdraw = require("../models/Withdraw")
const checkAuth = require("../middleware/check-auth")
router.get("/",checkAuth, (req, res, next) =>{
    Withdraw.find()
    .then(result =>{
     res.status(200).json({
         withdrawal_address: result
     });
    })
    .catch(err => {
     res.status(500).json({
         error: err
     })
    })
})
router.post("/", checkAuth, (req, res) =>{
    console.log(req.body)
    const updateDocument = async () => {
        try{
            const result = await Withdraw.findOneAndUpdate({ $and : [{metamask_address: req.body.metamask_address} , {date_time: req.body.date_time} ]} ,{
                $set : {
                    metamask_address: req.body.metamask_address,
                    date_time: req.body.date_time,
                    status: req.body.date_time,
                    hash: req.body.hash
                }});
            console.log(result)
            res.send("updated")
        } catch(err){
            console.log(err);
        }
    }
    updateDocument()
 })
 
 
module.exports = router;