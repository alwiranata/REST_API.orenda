const logRequest = (req, res, next) => {
  console.log("log terjadi request PATH : ", req.path);
  next();
};

module.exports = logRequest;
