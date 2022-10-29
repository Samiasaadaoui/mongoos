const mongoose =require('mongoose')
require('dotenv').config()

const connectDB = async()=>{

    try {
        await mongoose.connect(uri,{useNewUrlParser , vrai, useUnifiedTopology , vrai})
        console.log('database is connected')
    } catch (error) {
        console.log('failed to connect database')
        
    }
}
module.exports = connectDB