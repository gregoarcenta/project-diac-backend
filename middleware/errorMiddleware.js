exports.notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}
exports.errorHandler = (error, reg, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
        status: statusCode,
        nessage: error.message,
        stack: process.env.NODE_ENV === 'production' ? ":'(" : error.stack
    })
}