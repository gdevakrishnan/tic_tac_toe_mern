const userAuthModels = require("../models/userAuthModels");

// Update Leader Board
const updateLeaderBoard = async (req, res) => {
    try {
        const { _id, newLeaderBoard } = req.body;
        console.log(_id, newLeaderBoard);
        const task = await userAuthModels.findById({_id});
        const preLeaderBoard = task.leaderboard;
        const data = await userAuthModels.findByIdAndUpdate({_id}, {$set: {leaderboard: [...preLeaderBoard, newLeaderBoard]}});
        console.log(data);
        res.status(200).json({data});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { updateLeaderBoard };