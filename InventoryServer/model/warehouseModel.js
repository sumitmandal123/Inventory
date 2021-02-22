const mongoose = require('mongoose');


const WarehouseSchema = new mongoose.Schema({
    WarehouseCode: {
        type: String,
        required: [true, 'Please add WarehouseCode'],
        unique: true,
    },
    WarehouseName: {
        type: String,
        required: [true, 'Please add Warehouse Name'],
        maxlength: [1000]
    },
    Location: String,
})


module.exports = mongoose.model('Warehouse', WarehouseSchema);