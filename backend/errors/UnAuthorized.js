const { StatusCodes } = require('http-status-codes');
const CustomError = require('./CustomError');

class UnAuthorizedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
module.export = UnAuthorizedError;
