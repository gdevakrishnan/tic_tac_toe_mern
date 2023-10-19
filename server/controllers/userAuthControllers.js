const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userAuthModels = require("../models/userAuthModels");

require('dotenv').config();
const { SECRET_KEY, EXPIRY_TIME } = process.env;

// User Register
const addUserDetails = async (req, res) => {
    try {
        const { uname, gmail } = req.body;
        const preUser = await userAuthModels.findOne({gmail});
        
        if (preUser) {
            res.status(400).json({message: "User Already Exist"});
            return;
        }
        
        const preUname = await userAuthModels.findOne({uname});
        if (preUname) {
            res.status(400).json({message: "Username Already Exist"});
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

// User Login
const getUserDetails = async (req, res) => {
    try {
        const { uname, gmail, pwd } = req.body;
        const preUser = await userAuthModels.findOne({ gmail });

        if (!preUser) {
            res.status(200).json({message: "User Does not Exist"});
            return;
        }

        const preUname = await userAuthModels.findOne({uname});
        if (!preUname) {
            res.status(200).json({message: "Username Does not Exist"});
            return;
        }
        
        const decryptPassword = await bcrypt.compare(pwd, preUser.pwd);
        
        if (decryptPassword, uname === preUser.uname) {
            const token = jwt.sign({...preUser}, SECRET_KEY, {expiresIn: EXPIRY_TIME});
            res.status(200).json({message: "User Login Successfully", token});
            return;
        }
        
        res.status(400).json({message: "User Does not Exist"});
    }   catch(e) {
        res.status(400).json({message: e.message});
    }
}

// Verify User using JWT Token
const userVerify = async (req, res) => {
    try {
        const { token } = req.body;
        const data = await jwt.verify(token, SECRET_KEY)._doc;
        res.status(200).json({message: "verified successfully", data});
    }   catch(e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { addUserDetails, getUserDetails, userVerify };