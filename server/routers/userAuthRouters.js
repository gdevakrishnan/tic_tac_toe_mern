const express = require('express');
const routes = express.Router();
const { addUserDetails, getUserDetails, userVerify } = require('../controllers/userAuthControllers');

routes.post('/register', addUserDetails);
routes.post('/login', getUserDetails);
routes.post('/user_verify', userVerify);

module.exports = ("userAuthRouters", routes);