const bcrypt = require('bcryptjs');
const userAuthModels = require("../models/userAuthModels");

const addUserDetails = async (req, res) => {
    try {
        const { uname, gmail } = req.body;
        const preUser = await userAuthModels.findOne({gmail});
        if (preUser) {
            res.status(200).json({message: "User Already Exist"});
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.pwd, salt);
        const task = await userAuthModels.create({uname, gmail, pwd: hashPassword});
        res.status(200).json({message: "user registered successfully", data: task});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { addUserDetails };