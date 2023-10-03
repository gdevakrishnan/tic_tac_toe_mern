// const { default: mongoose } = require("mongoose");
// const userAuthModels = require("../models/userAuthModels");

const addUserDetails = async (req, res) => {
    try {
        // const {uname, gmail, pwd, cpwd} = req.body;
        console.log(req.body);
        res.status(200).json({message: "request recieved successfully"});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { addUserDetails };