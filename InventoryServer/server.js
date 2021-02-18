
const express = require('express');
const dotenv = require('dotenv');
const productRouter = require('./router/productRouter');
const connectDB = require('./config/databaseConnection');
const errorHandler = require('./middleware/error')
const logger  = require('./middleware/logger')

//Using Enviroment varriable
dotenv.config({ path: "./config/config.env" });
//Connetion to Mongodb
connectDB();



const app = express();


 

//Body Parser
app.use(express.json());

//Mount Router

app.use('/api',productRouter);
app.use(errorHandler);
app.use(logger)



const PORT = process.env.PORT || 8000;
const server = app.listen(PORT,
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );