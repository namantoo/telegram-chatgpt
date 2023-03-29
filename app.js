const express = require("express");
const bodyParser = require("body-parser");
var multer = require('multer');
var upload = multer();
const request = require("request");
require("./db/conn")
require('dotenv').config()

const loginRoute = require('./Routes/loginRoute')
const registrationRoute = require('./Routes/registrationRoute')
const resetRoute = require('./Routes/resetPasswordRoute')
const TelegramBot = require('./Routes/TelegramRoute')

const formidable = require('express-formidable');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express()
const checkAuth = require("./middleware/check-auth")
app.use(express.json());
// app.use(formidable());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(upload.array())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


//ALL ROUTERS CONNECT



app.use('/v1/auth/login', loginRoute )
// app.use('/v1/auth/registration', registrationRoute )
app.use('/v1/auth', resetRoute )
// app.use('/v1/chatgpt', TelegramBot )


// API to send OTP to Telegram
const sendOTPTelegram = async (otp) => {
    const message = `Your OTP is ${otp}`;
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;
    try {
      await axios.post(telegramApiUrl);
      console.log('OTP sent to Telegram');
    } catch (error) {
      console.error('Error sending OTP to Telegram:', error);
    }
  };


// Generate a random OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };


app.get("/", checkAuth, function(req, res){
    res.send( "working");
});
 // PORT
app.listen(3003, () => {
    console.log(`server is running`)
});