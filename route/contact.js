const express = require('express')
const route =express.Router()

route.get('/test' , (req , res)=>{
    res.send('test')
})






module.exports=route