const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Profile = require("../models/Profile")
const checkAuth = require("../middleware/check-auth");
const { update } = require('../models/Transactions');
router.get("/", checkAuth, (req, res, next) =>{
    console.log(req.query.metamask_address)
    Profile.find(({metamask_address: req.query.metamask_address}), function(err, val){
        res.send(val);
    })
})
router.post("/", checkAuth, (req, res) =>{
    console.log(req.body)

    const updateDocument = async () => {
        try{
            const result = await Profile.findOneAndUpdate({metamask_address: req.body.metamask_address},{
                $set : {
                    metamask_address: req.body.metamask_address,
                    apy: req.body.apy,
                    rm: req.body.rm,
                    status: req.body.status                 
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