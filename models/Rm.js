const mongoose = require("mongoose")

const  rmSchema = new mongoose.Schema({
    rm_username: String,
    rm_name: String,
    rm_phone: String,
    rm_email: String
},{ collection: 'RELATIONSHIP_MANAGERS',
versionKey: false //here
})

module.exports =  mongoose.model('RELATIONSHIP_MANAGERS', rmSchema) ;