const express = require('express');
const router = express.Router();
require("../db/conn")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
router.get("/", (req, res, next) =>{
    res.status(200).json({
        message: "this is create message api get"
    })
})
 
router.post("/", async (req, res)=>{
    try {
        const { email, password } = req.body;   
        console.log(email, password)
        if(email === "pd@c3links.org" && password === "pd@12345"){
                const token =  jwt.sign({ email: email, password: password }, "thisisaproductionbuildapiforourstartup", {
                expiresIn: "24h" 
                });
                console.log(token)
                const userVer = jwt.verify(token, "thisisaproductionbuildapiforourstartup")
                console.log(userVer)
                res.send({admin: {access: `${token}`}})         
        }else{
            res.send({message: "email or password incorrect"})
        }
    }
    catch(e){
        res.send(e)
    }
 });



module.exports = router;