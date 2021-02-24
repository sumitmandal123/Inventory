const asyncHandler = require("../middleware/asynchHandler");
//const productData = require("../model/productDataModel");
const { creatProductData, getAllProductData, getProductDataById, updateProductData } = require('../service/productDataService');

exports.getAllProductData = asyncHandler(async (req, res, next) => {


  //const product = await productData.find().populate('id');
  const product = await getAllProductData();
  //const product = 
  res.status(200).json({
    success: true,
    count: product.length,
    data: product,
  })
});

exports.addNewProductData = asyncHandler(async (req, res, next) => {


  const product = await creatProductData(req.body);
  res.status(200).json({
    success: true,
    data: product
  })
});

exports.getProductById = asyncHandler(async (req, res, next) => {
  const product = await getProductDataById(req.params.id);
  res.status(200).json({
    success: true,
    data: product
  })
});

exports.updateProductData = asyncHandler(async (req, res, next) => {
  const product = await updateProductData(req.body)
  res.status(200).json({
    success: true,
    data: product
  })

})