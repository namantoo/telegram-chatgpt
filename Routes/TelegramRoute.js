const express = require('express');
const router = express.Router();
const axios = require('axios');
require("../db/conn")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')

const TelegramBot = require('node-telegram-bot-api');
// const openai = require('openai');
const TELEGRAM_BOT_TOKEN = '6068872593:AAG-cRf8HVVAUq3RK0V5gbBOQhWSF5acCBA';
const TELEGRAM_CHAT_ID = '1752138028';

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const OPENAI_API_KEY = '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';
const { Configuration, OpenAIApi } =  require('openai');
const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

bot.on('message', async (message) => {
    const chatId = message.chat.id;
    const msg = message.text;
    console.log(msg)
    try{
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[
                // {"role": "system", "content": "You are a helpful assistant."},
                {role: "user", content: msg},
                // {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
                // {"role": "user", "content": "Where was it played?"}
            ],
            max_tokens: 2000,
            temperature: 1,
            stream: false

    })
    // console.log(response)
    const answer = response.data.choices[0].message.content;
      console.log( response.data.choices[0])
      bot.sendMessage(chatId, answer)
}
catch(error){
    console.log(error)
}
      // Send response back to Telegram chat
      
    
        
    
  });

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "this is create message api get"
    })
})




router.post("/", async (req, res) => {
   res.send("post")
  
});


module.exports = router;