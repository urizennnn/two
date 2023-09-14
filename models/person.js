const mongoose = require('mongoose')

require('mongoose')

const personSchema = new mongoose.Schema({
    name : {
        required : [ true , ' Person name must be a string and must be provided'],
        type : String,
    },
    age : {
        required : [ true , ' Person age must be Integer'],
        type : Number,
    },
    email : {
        required : [ true , ' Person email must be a unique'],
        type : String,
        unique : true,
    },
    user_id : {
        required : [ true , ' User_id must be Integer'],
        type : Number,
        unique : true,
    },
})

module.exports = mongoose.model('Person' , personSchema)