const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Notice = require("../models/Notice")
const checkAuth = require("../middleware/check-auth")
router.get("/", checkAuth, (req, res, next) =>{
   Notice.find()
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
router.post("/", checkAuth, (req, res) =>{
   console.log(req.body)
    const notification = new Notice({
        date_time: new Date(),
        public_notification: req.body.public_notification
    });
    console.log(notification)
    notification.save()
    res.send("working")
})



module.exports = router;