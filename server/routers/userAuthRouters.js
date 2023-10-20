const express = require('express');
const routes = express.Router();
const { addUserDetails, getUserDetails, userVerify, updateLeaderBoard } = require('../controllers/userAuthControllers');

routes.post('/register', addUserDetails);
routes.post('/login', getUserDetails);
routes.post('/user_verify', userVerify);
routes.post('/update_leaderboard', updateLeaderBoard);

module.exports = ("userAuthRouters", routes);