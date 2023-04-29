const router = require("express").Router();

require("./auth/register")(router);
require("./auth/users")(router);

module.exports = router;
