const express =require('express');
const {addNewWarehouseData, getAllWarehouse, getWarehouseById} = require('../controllers/warehouseController');
const router = express.Router();

// router('/addNewWarehouse')
// .post(addNewWarehouseData);
// router('/getAllWarehouse')
// .get(getAllWarehouse);
router.get('/getAllWarehouse', getAllWarehouse);
router.post('/addNewWarehouse', addNewWarehouseData);
// router.route('/getWarehouseById')
// .post(getWarehouseById);


module.exports = router;