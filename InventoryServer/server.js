
const express = require('express');
const dotenv = require('dotenv');
const productRouter = require('./router/productRouter');
const accoutRouter = require('./router/accountRouter');
const warehouseRouter = require('./router/warehouseRouter');
const connectDB = require('./config/databaseConnection');
const errorHandler = require('./middleware/error')
const logger = require('./middleware/logger')
const cors = require('cors')
var cookieParser = require('cookie-parser')

//Using Enviroment varriable
dotenv.config({ path: "./config/config.env" });
//Connetion to Mongodb
connectDB();



const app = express();




//Body Parser
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//Mount Router


app.use('/api/Product', productRouter);
app.use('/api/account', accoutRouter);

app.use('/api', productRouter);
app.use('/api', warehouseRouter);
app.use(errorHandler);
app.use(logger)



const PORT = process.env.PORT || 8000;
const server = app.listen(PORT,
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);