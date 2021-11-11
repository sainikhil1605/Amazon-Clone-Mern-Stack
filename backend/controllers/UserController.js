const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

exports.LoginController = (req, res) => {
  const { userEmail, userPassword } = req.body;
  console.log(req.body);
  UserModel.findOne({ userEmail }, (_err, doc) => {
    if (doc === null) {
      res.status(401);
      res.send({ status: 'Username doesnot match' });
    } else {
      bcrypt.compare(userPassword, doc.userPassword, (err, isPasswordMatch) => {
        if (!isPasswordMatch) {
          res.status(401);
          res.send({ status: 'Email or Password Does Not Match' });
        }
        console.log(isPasswordMatch);
        if (isPasswordMatch) {
          res.status(200);
          const token = jwt.sign(
            { userEmail: doc.userEmail, userPassword: doc.userPassword },
            'nikhil',
            { expiresIn: '2h' }
          );

          res.send({ status: 'Login Success', token });
        }
      });
    }
  });
};
exports.SignUpController = (req, res) => {
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
            res.send('Sign Up Success');
          }
        });
      });
    }
  });
};
