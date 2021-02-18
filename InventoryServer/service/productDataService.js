const{creatProductData} = require('../dataAccess/ProductData');

exports.creatProductData = async (product) =>  await creatProductData(product);