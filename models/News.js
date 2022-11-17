const mongoose = require("mongoose")

const  newsSchema = new mongoose.Schema({
   date_time: Date,
   news_headline: String,
   news_text: String    
},{ collection: 'CRYPTO_NEWS',
versionKey: false //here
})

module.exports =  mongoose.model('CRYPTO_NEWS', newsSchema) ;

