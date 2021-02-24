const productData = require('../model/productDataModel')

exports.creatProductData = async(product)=> productData.create(product);
exports.getAllProductData = async()=> productData.find();
exports.getProductDataById = async(id)=> productData.findById(id);