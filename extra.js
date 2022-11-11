// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// require("./db/conn")
// const noticeRoute = require('./Routes/noticeRoute')
// const Notice = require("./models/Notice")
// const formidable = require('express-formidable');
// const User = require("./models/User")
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const app = express()
// const checkAuth = require("./middleware/check-auth")
// app.use(express.json());
// // app.use(formidable());
// app.use(bodyParser.json());       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//     extended: true
// }));
// app.use('/v1/createmessage/public', noticeRoute )
// app.get("/", checkAuth, function(req, res){
//     res.send( "/login.html");
// });
// // app.post("/v1/createmessage/public", function (req, res) {
// //     console.log(req.body)
// //     // const { email, password } = req.body;
// //     // const userDb = new User({
// //     //     email,
// //     //     password
// //     // })
// //     // userDb.save().then(() => {
// //     //     res.status(201).send(userDb);
// //     // }).catch((e) => {
// //     //     res.status(400).send(e)
// //     // })

// // });
// // const port = process.env.PORT || 3005
// const createToken = async (id) => {
//     const token = await jwt.sign({ _id: id }, "thisisaproductionbuildapiforourstartup", {
//         expiresIn: "5 minutes"
//     });
//     console.log(token)
//     const userVer = jwt.verify(token, "thisisaproductionbuildapiforourstartup")
//     console.log(userVer)
// }
// // createToken();
// app.get("/", checkAuth, function(req, res){
//     res.send( "/login.html");
// });
// app.post("/v1/auth/register", function (req, res) {
//     const { email, password } = req.body;
//     const userDb = new User({
//         email,
//         password
//     })
//     userDb.save().then(() => {
//         res.status(201).send(userDb);
//     }).catch((e) => {
//         res.status(400).send(e)
//     })

// });
// // app.post("/test", async(req, res) =>{
// //     console.log(req.body)
// //     const notification = new Notice({
        
// //         date_time: req.body.date_time,
// //         public_notification: req.body.public_notification
// //     });
// //     console.log(notification)
// //     notification.save()
// //  })
// app.post("/v1/auth/login", async (req, res)=>{
//     try {
//         const { email, password } = req.body;   
//         console.log(email, password)
//         if(email === "pd@c3links.org" && password === "pd@12345"){
//                 const token =  jwt.sign({ email: email, password: password }, "thisisaproductionbuildapiforourstartup", {
//                 expiresIn: "5 seconds" 
//                 });
//                 console.log(token)
//                 const userVer = jwt.verify(token, "thisisaproductionbuildapiforourstartup")
//                 console.log(userVer)
//                 res.send({admin: {access: `${token}`}})         
//         }else{
//             res.send({message: "email or password incorrect"})
//         }
//     }
//     catch(e){
//         res.send(e)
//     }
//  });
// app.listen(3005, () => {
//     console.log(`server is running`)
// });











