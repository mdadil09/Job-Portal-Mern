const isUser = async (req, res, next) => {
  if (req.user.role === "user") {
    return next();
  }

  return res.status(401).send("Unauthorized!");
};

const isAdmin = async (req, res, next) => {
  console.log(req.user);

  if (req.user.role === "admin") {
    return next();
  }

  return res.status(401).send("Unauthorized!");
};

const commonRole = async (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "user") {
    return next();
  }
  return res.status(401).send("Unauthorized!");
};

module.exports = {
  isUser,
  isAdmin,
  commonRole,
};
