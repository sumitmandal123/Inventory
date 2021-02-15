
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/databaseConnection');

//Using Enviroment varriable
dotenv.config({ path: "./config/config.env" });


//Connect to database
connectDB();
const app = express();

//Body Parser
app.use(express.json());



const PORT = process.env.PORT || 8000;
const server = app.listen(PORT,
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );