const userAuthModels = require("../models/userAuthModels");

// Update Leader Board
const updateLeaderBoard = async (req, res) => {
    try {
        const { _id, newLeaderBoard } = req.body;
        const task = await userAuthModels.findById({_id});
        const preLeaderBoard = task.leaderboard;
        const data = await userAuthModels.findByIdAndUpdate({_id}, {$set: {leaderboard: [...preLeaderBoard, newLeaderBoard]}});
        res.status(200).json({data});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

// Get LeaderBoard
const getLeaderBoardDetails = async (req, res) => {
    try {
        const { _id } = req.body;
        const task = await userAuthModels.findById({_id});
        const leaderBoard = task.leaderboard;
        res.status(200).json({leaderBoard});
    }   catch (e) {
        res.status(400).json({message: e.message});
    }
}

// Delete Leaderboard

const delLeaderBoardDetails = async (req, res) => {
    try {
        const { _id } = req.body;
        const data = await userAuthModels.findByIdAndUpdate({_id}, {$set: {leaderboard: []}});
        res.status(200).json({message: "Leaderboard Clear Successfully"});
    }   catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { updateLeaderBoard, getLeaderBoardDetails, delLeaderBoardDetails };