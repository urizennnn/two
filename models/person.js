const mongoose = require('mongoose')

require('mongoose')

const personSchema = new mongoose.Schema({
    name : {
        required :  true,
        type : String,
    }
})

module.exports = mongoose.model('Person' , personSchema)