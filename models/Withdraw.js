const mongoose = require("mongoose")


const  withdrawSchema = new mongoose.Schema({

    metamask_address: String
  
     
},{ collection: 'WITHDRAW_REQUESTS',
versionKey: false //here
})

// const Notice = new mongoose.model('Notice', noticeSchema);

module.exports =  mongoose.model('WITHDRAW_REQUESTS', withdrawSchema) ;