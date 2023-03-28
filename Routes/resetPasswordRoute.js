const express = require('express');
const router = express.Router();
const axios = require('axios');

require("../db/conn")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "this is create message api get"
    })
})
const TELEGRAM_BOT_TOKEN = '6068872593:AAG-cRf8HVVAUq3RK0V5gbBOQhWSF5acCBA';
const TELEGRAM_CHAT_ID = '1752138028';

// API to send OTP to Telegram
const sendOTPTelegram = async (otp, telegramUsername) => {
  const message = `hey dyuti`;
  const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;
  try {
    const ret = await axios.post(telegramApiUrl);
    console.log(ret)
    console.log('OTP sent to Telegram');
    // res.send(`OTP ${otp} sent to Telegram`);
  } catch (error) {
    console.error(`Error sending OTP to Telegram: ${error.message}`);
   
  }
};
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

// Store OTPs temporarily in memory
const otpStore = {};

otpStore["naman2"] = "444"


router.post("/forgot-password", async (req, res) => {
    try {
        const { email, username } = req.body;

        // Generate an OTP
        const otp = generateOTP();
        console.log(`Generated OTP: ${otp}`);

        // Store the OTP for verification
        otpStore[email] = otp;
        console.log(otpStore)
        // Send the OTP to Telegram
       
        sendOTPTelegram(otp, username);
        res.send(`OTP ${otp} sent to Telegram`)

       
    }
    catch (e) {
        res.send(e)
    }
});
router.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;
    console.log({email, otp})
    console.log( otpStore[email])
    // Check if the OTP matches
    // if (otpStore[email] === otp) {
    //   res.send('OTP matched successfully');
    // } else {
    //   res.status(401).send('Invalid OTP');
    // }

    const otpTest = "444";
    if (String(otpStore[email]) === String(otp)) {
        res.send('OTP matched successfully');
      } else {
        res.status(401).send('Invalid OTP');
      }
  
  
});


module.exports = router;