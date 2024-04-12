const express = require('express');
const router = express.Router()
require('dotenv').config()
const mongoose = require('mongoose')
const {getConnectionStatus} = require('./db.js')
const {artmodle} = require('./schema.js')
const {User}= require('./userschema.js')
router.use(express.json({ limit: '500mb', extended: true }));
const bodyParser = require('body-parser');

router.use(bodyParser.json({ limit: '500mb' }));
router.use(bodyParser.urlencoded);

const cors = require('cors');
// const User = require('./userschema.js');
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

router.post('/signup',async(req,res)=>{
    try{
        const user = await User.create({
            username:req.body.username,
            password:req.body.password
        })
        res.send(user)
    }catch(err){
        console.error(err)
    }
  
})
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username ,password});
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid username / password' });
        }
        res.status(200).json({ user });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/updateUser/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate({_id:_id}, req.body);
        console.log(updatedUser)
        res.json(updatedUser);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/getID', async (req,res) => {
    const {username,password} = req.body
    try {
        const userID = await User.findOne({username,password});
        console.log(userID)
        res.json(userID);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})




module.exports = router