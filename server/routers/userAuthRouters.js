const express = require('express');
const routes = express.Router();
const { addUserDetails, getUserDetails } = require('../controllers/userAuthControllers');

routes.post('/register', addUserDetails);
routes.post('/login', getUserDetails);

module.exports = ("userAuthRouters", routes);