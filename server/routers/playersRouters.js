const express = require('express');
const { updateLeaderBoard, getLeaderBoardDetails } = require('../controllers/playersControllers');
const routes = express.Router();

routes.post('/update_leaderboard', updateLeaderBoard);
routes.post('/leaderboard', getLeaderBoardDetails);

module.exports = ("playersRouters", routes);
