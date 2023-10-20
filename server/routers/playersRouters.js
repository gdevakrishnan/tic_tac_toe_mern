const express = require('express');
const { updateLeaderBoard } = require('../controllers/playersControllers');
const routes = express.Router();

routes.post('/update_leaderboard', updateLeaderBoard);

module.exports = ("playersRouters", routes);
