const asyncHandler = require("../middleware/asynchHandler");
const { creatNewWarehouse, getAllWarehouse, getWarehouseById } = require('../service/warehouseService');

exports.addNewWarehouseData = asyncHandler(async (req, res, next) => {

    const warehouse = await creatNewWarehouse(req.body);
    res.status(200).json({
      success: true,
      data: warehouse
    })
  })

exports.getAllWarehouse = asyncHandler(async (req, res, next) => {

    const warehouse = await getAllWarehouse();
    res.status(200).json({
      success: true,
      count: warehouse.length,
      data: warehouse,
    })
  })

// exports.getWarehouseById = asyncHandler(async (req, res, next) => {

//     const warehouse = await creatProductData(req.id);
//     res.status(200).json({
//       success: true,
//       data: warehouse
//     })
//   })