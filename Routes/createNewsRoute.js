const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const News = require("../models/News")
const checkAuth = require("../middleware/check-auth")
router.get("/",checkAuth, (req, res, next) =>{
    News.find()
    .then(result =>{
     res.status(200).json({
         News: result
     });
    })
    .catch(err => {
     res.status(500).json({
         error: err
     })
    })
})
router.post("/", checkAuth, (req, res) =>{
   console.log(req.body.news_headline)
    const news = new News   ({
        date_time: new Date(),
        news_headline: req.body.news_headline,
        news_text: req.body.news_text
    });
    console.log(news)
    news.save()
    res.send("working")
})



module.exports = router;