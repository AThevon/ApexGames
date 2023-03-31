const weapon = require('../Model/weapons');

const getWeapons = async (req, res) => {
    try {
        const weapons = await weapon.find();
        res.json(weapons);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getWeapon = async (req, res) => {
    try {
        const weapon = await weapon.findById(req.params.id);
        res.json(weapon);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createWeapon = async (req, res) => {
    try {
        const newweapon = await weapon.create(req.body);
        res.json(newweapon);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateWeapon = async (req, res) => {
    try {
        const updateweapon = await weapon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateweapon);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteWeapon = async (req, res) => {
    try {
        const deleteweapon = await weapon.findByIdAndDelete(req.params.id);
        res.json(deleteweapon);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    getWeapons,
    getWeapon,
    createWeapon,
    updateWeapon,
    deleteWeapon
};