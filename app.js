const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRoute = require('./routes/contact')
const bodyParser = require('body-parser')

const connectWithDatabase = async()=>{
    try
    {
        await mongoose.connect('mongodb+srv://sbs123:Sbs123@sbs-contact.unkqm.mongodb.net/?retryWrites=true&w=majority&appName=SBS-Contact')
        console.log('connected with database')
    }
    catch(err)
    {
        console.log(err)
    }
}

connectWithDatabase()


app.use(bodyParser.json())

app.use('/contact',contactRoute)



module.exports = app;