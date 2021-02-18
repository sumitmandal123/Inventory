const productData = require('../model/productDataModel')

exports.creatProductData = async(product)=> productData.create(product);
