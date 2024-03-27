const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

let connectionStatus = 'connecting to db...'

const database = async ()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log('Database connected')
        connectionStatus = 'Connected'
    }catch(err){
         console.log('connection failed',err)
         connectionStatus = 'failed to connect database'
    }
}

const getConnectionStatus = async()=>{
    return JSON.stringify(connectionStatus)
}

module.exports = {database,getConnectionStatus};