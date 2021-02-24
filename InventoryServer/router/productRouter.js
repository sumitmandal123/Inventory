const express = require('express');
const { getAllProductData, addNewProductData, getProductById, updateProductData }
    = require('../controllers/productDataController');
const router = express.Router();

router.route('/getAllProducts')
    .get(getAllProductData);
router.route('/AddNewProduct')
    .post(addNewProductData);
router.route('/GetProductById/:id').get(getProductById);
router.route('/SaveEditProduct').post(updateProductData);



module.exports = router;