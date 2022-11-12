const mongoose = require("mongoose")


const  transactionsSchema = new mongoose.Schema({

    metamask_address: String
  
     
},{ collection: 'PRINCIPAL_MASTER',
versionKey: false //here
})

// const Notice = new mongoose.model('Notice', noticeSchema);

module.exports =  mongoose.model('PRINCIPAL_MASTER', transactionsSchema) ;