const mongoose = require('mongoose')
const AddressSchema = new mongoose.Schema({
    
        lane1:String,
        street: String,
        city:String,
        country:String

    
})

module.exports =  mongoose.model("ADDRESS",AddressSchema)