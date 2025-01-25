const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    fullName:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:String,require:true},
    address:{type:String,require:true},
    batch:{type:String,require:true}
})

module.exports = mongoose.model('contact',contactSchema)