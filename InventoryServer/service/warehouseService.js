const{creatNewWarehouse, getAllWarehouse, getWarehouseById} = require('../dataAccess/WarehouseDataAccess');

exports.creatNewWarehouse = async (warehouse) =>  await creatNewWarehouse(warehouse);
exports.getAllWarehouse = async () =>  await getAllWarehouse();
exports.getWarehouseById = async (id) =>  await getWarehouseById(id);