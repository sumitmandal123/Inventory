const warehouseModel = require('../model/warehouseModel')

exports.creatNewWarehouse = async(warehouse)=> warehouseModel.create(warehouse);
exports.getAllWarehouse = async()=> warehouseModel.find();
exports.getWarehouseById = async(id)=> warehouseModel.findById(id);