const mongoose = require('mongoose');

const { Schema } = mongoose;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
const userSchema = new Schema({
  userId: {
    type: Number,
    unique: true,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userPassword: {
    type: String,
  },
  userPhoneNumber: {
    type: Number,
  },
  userCart: {
    type: [{ type: String }],
  },
});
userSchema.plugin(autoIncrement.plugin, {
  model: 'UserModel',
  field: 'userId',
});
const UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel;
