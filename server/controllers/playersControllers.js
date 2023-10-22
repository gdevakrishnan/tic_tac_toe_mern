const userAuthModels = require("../models/userAuthModels");

// Update Leader Board
const updateLeaderBoard = async (req, res) => {
    try {
        const { _id, newLeaderBoard } = req.body;
        const data = await userAuthModels.findById({_id});
        const { leaderboard } = data;
        const task = await userAuthModels.updateOne({_id}, {$set: {leaderboard: [...leaderboard, newLeaderBoard]}})
        res.status(200).json({task});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { updateLeaderBoard };