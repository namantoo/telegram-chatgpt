const express = require('express');
const router = express.Router();
// var multer = require('multer');
// var upload = multer();
router.get("/", (req, res, next) =>{
    res.status(200).json({
        message: "this is create message api get"
    })
})
router.post("/", async (req, res)=>{
    try {
        const { email, password } = req.body;   
        console.log(email, password)
       res.send(email)
    }
    catch(e){
        res.send(e)
    }
 });
module.exports = router;