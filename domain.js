var createError = require('http-errors');

exports.siteRoute = async function (req, res, next) {
  const subdomain = req.query.subd;
  if(!subdomain) {
    next(createError.NotFound());
  }
  
  req.subdomain = subdomain;
  next();
}