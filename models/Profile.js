const mongoose = require("mongoose")


const  profileSchema = new mongoose.Schema({

    metamask_address: String,
    rm: String,
    apy: Number,
    status: String
     
},{ collection: 'USER_PROFILES',
versionKey: false //here
})

// const Notice = new mongoose.model('Notice', noticeSchema);

module.exports =  mongoose.model('USER_PROFILES', profileSchema) ;