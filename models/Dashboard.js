const mongoose = require("mongoose")


const  dashboardSchema = new mongoose.Schema({

    metamask_address: String
  
     
},{ collection: 'FINANCIAL_DATA',
versionKey: false //here
})

// const Notice = new mongoose.model('Notice', noticeSchema);

module.exports =  mongoose.model('FINANCIAL_DATA', dashboardSchema) ;