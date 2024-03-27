const express = require('express')
const app = express()
require('dotenv').config();
const router = require('./routes.js');
const PORT = process.env.PORT || 3000
const {database} = require('./db.js')
const cors = require('cors')

app.use(router);
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Database working")
    console.log("👍🏻work Done")
})

app.listen(PORT, () => {
    database()
  console.log(`Server is running... ${PORT}`);
});