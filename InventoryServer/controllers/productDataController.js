const asyncHandler = require("../middleware/asynchHandler");
const productData = require("../model/productDataModel");
const{creatProductData} = require('../service/productDataService');

exports.getAllProductData = asyncHandler(async(req,res,next)=>{


    const product = await productData.find();

    res.status(200).json({
        success:true,
        count:product.length,
        data:product,
      })
})

exports.addNewProductData = asyncHandler(async(req,res,next)=>{


  const product = await creatProductData(req.body);
  res.status(200).json({
      success:true,
      data:product
    })
})