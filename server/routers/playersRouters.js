const express = require('express');
const { updateLeaderBoard, getLeaderBoardDetails, delLeaderBoardDetails } = require('../controllers/playersControllers');
const routes = express.Router();

routes.post('/update_leaderboard', updateLeaderBoard);
routes.post('/delete_leaderboard', delLeaderBoardDetails);
routes.post('/leaderboard', getLeaderBoardDetails);

module.exports = ("playersRouters", routes);
