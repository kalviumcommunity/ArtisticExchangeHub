const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

let connectionStatus = 'connecting to db...';

const database = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Database connected');
        connectionStatus = 'Connected';
    } catch (err) {
        console.error('Failed to connect to database:', err);
        connectionStatus = 'Failed to connect to database';
        process.exit(1);
    }
};

const getConnectionStatus = async () => {
    return JSON.stringify(connectionStatus);
};

module.exports = { database, getConnectionStatus };
