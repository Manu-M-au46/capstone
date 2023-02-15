const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const SECRET_KEY = 'secret'
// const jwt = require('jsonwebtoken')

const adSchema = new Schema({

    photos: [{}],
    price: {
      type: Number,
      maxLength: 255,
    },
    description: {},
    address : {
        type: String,
        default: "",
    },
    phoneno : {
        type: String,
        default: "",
    }
})

const adModel = mongoose.model('ads', adSchema)
module.exports = adModel
