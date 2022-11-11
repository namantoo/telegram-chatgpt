const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
require("./db/conn")
const noticeRoute = require('./Routes/noticeRoute')
const loginRoute = require('./Routes/loginRoute')
const Notice = require("./models/Notice")
const formidable = require('express-formidable');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express()
const checkAuth = require("./middleware/check-auth")
app.use(express.json());
// app.use(formidable());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//ALL ROUTERS CONNECT
app.use('/v1/createmessage/public', noticeRoute )
app.use('/v1/auth/login', loginRoute )

app.get("/", checkAuth, function(req, res){
    res.send( "/login.html");
});
app.get("/", checkAuth, function(req, res){
    res.send( "/login.html");
});


 // PORT
app.listen(3005, () => {
    console.log(`server is running`)
});











