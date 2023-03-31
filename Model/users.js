const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true
        },
        
    password: {
        type: String,
        required: true
        },
        
    createdAt: {
        type: Date,
        default: Date.now
        },
    favoriteLegend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Legend',
        default: null
        }
    });


module.exports = mongoose.model('users', userSchema);
