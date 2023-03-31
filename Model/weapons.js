const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    category: {
        type: String,
        required: true
        },
    ammo_type:  {
        type: String,
        required: true
        },
    damage: {
        type: Number,
        required: true
        },
    legendary: {
        type: Boolean,
        required: true
        },
});

module.exports = mongoose.model('Weapon', weaponSchema);