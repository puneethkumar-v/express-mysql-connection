const jwt = require("jsonwebtoken");
const payloadGenerator = require("./payloadGenerator");
require("dotenv").config();

function accessTokenGenerator(user) {
  const payload = payloadGenerator(user);

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
}

module.exports = {
  accessTokenGenerator,
};
