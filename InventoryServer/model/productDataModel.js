const mongoose = require('mongoose');


const ProductDataSchema = new mongoose.Schema({
    Barcode:{
        type:String,
        required:[true,'Please add a BarCode'],
        unique:true,
    },
    Brand:{
        type:String,
        required:[true,'Please add a Brand Namar'],
        maxlength:[1000]
    },
    ProductName:{
        type:String,
    },
    Weight:Number,
    Discount:{
        type:Number,
    },
    CGST:{
        type:Number,
        required:[true,'please add a address']
    },
    SGST:Number,
    TotalGst:{
        type:Number,
    },
    MRP:Number,
})

ProductDataSchema.pre('save', async function(next){
    this.TotalGst = this.SGST+this.CGST;
    next();
})

module.exports = mongoose.model('ProductData',ProductDataSchema);