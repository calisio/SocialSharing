// const express = require('express');
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const databaseName='mod7';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
        console.log(`Database connected : ${con.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}




export default connectDB




