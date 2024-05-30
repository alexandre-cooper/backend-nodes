const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json("Não Autorizado");
  }
  return next();
};

module.exports = verifyToken;
