const errorHandler = async (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ err: err.message || 'Internal Server Error' });
};
module.exports = errorHandler;
