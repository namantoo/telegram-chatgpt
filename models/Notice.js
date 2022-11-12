const mongoose = require("mongoose")


const  noticeSchema = new mongoose.Schema({
     
   date_time: Date,
   public_notification: String

     
},{ collection: 'PUBLIC_NOTIFICATIONS',
versionKey: false //here
})

// const Notice = new mongoose.model('Notice', noticeSchema);

module.exports =  mongoose.model('PUBLIC_NOTIFICATIONS', noticeSchema) ;