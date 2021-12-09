class CustomError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode || null;
  }
}
module.exports = CustomError;
