//logic to create user
//define Schema

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        min:19
    },
    email:{
        lowercase:true,
        required: true,
        type:String

    },
    address: {
        type:[mongoose.SchemaType.ObjectId],
        ref:"ADDRESS"
    }
    
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("USERS",userSchema)