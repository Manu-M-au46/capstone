const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const SECRET_KEY = 'secret'
// const jwt = require('jsonwebtoken')

const agentSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    cpassword: {
        type: String,
        required: true
    },
    // role : {
    //     type: String,
    //     default: ["Buyer"],
    //     enum: ["Buyer","Seller"]    
    // },
    address : {
        type: String,
        default: "",
    },
    phoneno : {
        type: String,
        default: "",
    },
    tokens: [
        {
            token: {
               type: String,
               required:true 
            }
        }
    ]
})

const agentModel = mongoose.model('agents', agentSchema)
module.exports = agentModel
