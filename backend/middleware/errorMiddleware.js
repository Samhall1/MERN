const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode)

  res.json({
    message: err.message,
    // This will only show us errors in development and not production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {
  errorHandler,
}