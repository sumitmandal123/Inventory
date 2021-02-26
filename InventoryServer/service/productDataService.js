const { creatProductData, getAllProductData, getProductDataById, updateProductData } = require('../dataAccess/ProductData');

exports.creatProductData = async (product) => await creatProductData(product);
exports.getAllProductData = async () => await getAllProductData();
exports.getProductDataById = async (id) => await getProductDataById(id);
exports.updateProductData = async (product) => await updateProductData(product);