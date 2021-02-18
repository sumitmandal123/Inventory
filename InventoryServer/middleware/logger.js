
const  errorLog = require('../model/errorLogModel')

const logger = (err,req,res,next)=>{
    console.log('in log');
    if(err){
      var errorLogModel={};
      errorLogModel.Name =  err.name;
      errorLogModel.Message = err.message;
      errorLogModel.StackTrace = err.stack;
      errorLogModel.Code  = err.code;
      errorLogModel.CurrentUrl = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
      errorLog.create(errorLogModel);

    }
    next();
  
  }

  module.exports = logger;