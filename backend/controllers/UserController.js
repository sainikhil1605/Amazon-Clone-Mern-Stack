const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

exports.LoginController = ((req, res) => {
  const { userEmail, userPassword } = req.body;
  UserModel.findOne({ userEmail }, (_err, doc) => {
    bcrypt.compare(userPassword, doc.userPassword, (err, isPasswordMatch) => {
      if (err) {
        res.status(401);
        res.send('Email or Password Does Not Match');
      }
      res.status(200);
      res.send(isPasswordMatch);
    });
  });
});
exports.SignUpController = ((req, res) => {
  const { userPassword } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      bcrypt.hash(userPassword, salt, (_err, hash) => {
        const userData = new UserModel({ ...req.body, userPassword: hash });
        userData.save((err) => {
          if (err) {
            res.status(400);
            res.send('Error Occured Please Try Again');
          } else {
            res.status(200);
            res.send('Login Success');
          }
        });
      });
    }
  });
});
