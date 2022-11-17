const mongoose = require("mongoose")


const  privateNoticeSchema = new mongoose.Schema({
   metamask_address: String,   
   date_time: Date,
   private_notification: String

     
},{ collection: 'PRIVATE_NOTIFICATIONS',
versionKey: false //here
})
module.exports =  mongoose.model('PRIVATE_NOTIFICATIONS', privateNoticeSchema) ;

