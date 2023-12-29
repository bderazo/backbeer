const boom = require('@hapi/boom');

const { config } = require('./../config/config');

//
function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

// este middleware se encarga de verificar que el usuario tenga el rol de admin
function checkAdminRole(req, res, next) {
  const { user } = req;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
}

// este middleware se encarga de verificar que el usuario tenga alguno de los roles recibidos
function checkRoles(...roles) {
  return (req, res, next) => {
    const { user } = req;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
