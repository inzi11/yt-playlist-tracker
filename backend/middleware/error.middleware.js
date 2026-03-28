const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    return res.status(statusCode).json({ message: err.message || "internal server error"})
}


export default errorHandler