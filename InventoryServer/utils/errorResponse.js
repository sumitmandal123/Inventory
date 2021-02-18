

class ErrorResponse extends Error{

    constructor(msg,statusCode){
        super(msg);
        this.code = statusCode;
        this.showMessage();
    }

  showMessage(){
        console.log('In constructor');
    }
}

module.exports = ErrorResponse;