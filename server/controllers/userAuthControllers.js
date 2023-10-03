const { default: mongoose } = require("mongoose");
const userAuthModels = require("../models/userAuthModels");

const addUserDetails = async (req, res) => {
    try {
        const task = await userAuthModels.create(req.body);
        res.status(200).json({message: "user registered successfully"});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { addUserDetails };