const express = require('express')
const app = express()
const PORT = 3002

app.get('/',(req,res)=>{
    res.send("Database working")
    console.log("👍🏻work Done")
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})