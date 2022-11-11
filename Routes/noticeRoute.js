const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Notice = require("../models/Notice")
router.get("/", (req, res, next) =>{
    res.status(200).json({
        message: "this is create message api get"
    })
})
router.post("/", (req, res) =>{
   console.log(req.body)
    const notification = new Notice({
        date_time: req.body.date_time,
        public_notification: req.body.public_notification
    });
    console.log(notification)
    notification.save()
})



module.exports = router;