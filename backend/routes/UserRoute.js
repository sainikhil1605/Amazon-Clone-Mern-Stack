const express = require('express');

const UserRouter = express.Router();
const UserController = require('../controllers/UserController');

UserRouter.post('/login', UserController.LoginController);
UserRouter.post('/sign-up', UserController.SignUpController);
module.exports = UserRouter;
