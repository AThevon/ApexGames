const user = require('../Model/users');

const getUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getUser = async (req, res) => {
    try {
        const user = await user.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = await user.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const updateUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleteUser = await user.findByIdAndDelete(req.params.id);
        res.json(deleteUser);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};