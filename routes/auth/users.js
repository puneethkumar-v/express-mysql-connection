const { connection } = require("../../db/db.js");

module.exports = (router) => {
  router.get("/users", async (req, res) => {
    console.log("Route", req.path);

    try {
      connection.query("SELECT * FROM user", (err, result) => {
        if (err) {
          throw err;
        }
        res.json(result);
      });
    } catch (err) {
      console.log(err);
    }
  });
};
