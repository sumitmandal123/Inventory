const ErrorResponse = require("../utils/errorResponse.js");
const errorHandler = (err,req,res,next)=>{
    let error = {...err}
     error.message = err.message;
    console.log(err.stack);
    console.log(err.name);

    if(err.name == "CastError"){
        const msg = `Bootcamp not found with id of ${err.value}`;
        error = new ErrorResponse(msg, 404);
    }

    if(err.code == 11000){
        const msg = `Duplicate entry`;
        error = new ErrorResponse(msg, 404);
    }

    console.log(error.code);
    next(err);
    res.status(error.code || 500).json({
        success:false,
        error:error.message || 'Server Error'
    })
};

module.exports = errorHandler;