const mongoose = require('mongoose');

const legendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    class: {
        type: String,
        required: true
        },
    passive: {
        type: String,
        required: true
        },
    active: {
        type: String,
        required: true
        },
    ultimate: {
        type: String,
        required: true
        }
    });

    module.exports = mongoose.model('Legend', legendSchema);