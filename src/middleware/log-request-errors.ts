export default (err, req, res, next) => {
  req.log.error(err)
  next()
}
