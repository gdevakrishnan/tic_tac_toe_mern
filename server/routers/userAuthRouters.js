const express = require('express');
const routes = express.Router();
const { addUserDetails } = require('../controllers/userAuthControllers');

routes.post('/register', addUserDetails);

module.exports = ("userAuthRouters", routes);