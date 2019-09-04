const jwt = require("express-jwt");
const jwkRsa = require("jwks-rsa");

const namespace = "http://localhost:3000/";

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwkRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: "https://parthsatasiya51.auth0.com/.well-known/jwks.json"
  }),
  audience: "GRSKxbyYr1cWbgkNKCoWHba48NwwNRok",
  issuer: "https://parthsatasiya51.auth0.com/",
  algorithms: ["RS256"]
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;
  if (user && user[`${namespace}role`] === role) next();
  else
    return res
      .status(401)
      .send({
        title: "Not Authorized",
        detail: "You are not authorized to access this data"
      });
};
