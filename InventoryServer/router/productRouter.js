const express =require('express');
const {getAllProductData,addNewProductData} = require('../controllers/productDataController');
const router = express.Router();

router.route('/getAllProducts')
.get(getAllProductData);
router.route('/AddNewProduct')
.post(addNewProductData);


module.exports = router;