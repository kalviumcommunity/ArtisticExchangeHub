const express = require('express');
const router = express.Router()
require('dotenv').config()
const mongoose = require('mongoose')
const {getConnectionStatus} = require('./db.js')
const {artmodle} = require('./schema.js')
router.use(express.json());

const cors = require('cors')
router.use(cors())

router.get('/server',(req,res)=>{
    res.send('Server deployed')
})


router.get('/db',async (req,res)=>{
    const status = await getConnectionStatus()
    res.send(status)
})

router.get('/art', async (req, res) => {
    try {
        const arts = await artmodle.find({});
        console.log(arts);
        res.status(200).send(arts);
    } catch (err) {
        res.status(401).send({ error: 'Error fetching data', details: err });
    }
});


module.exports = router