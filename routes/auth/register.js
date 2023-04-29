const addUser = require("../../helper/addUser");
const { accessTokenGenerator } = require("../../helper/jwtGenerator");

module.exports = (router) => {
  router.post("/register", async (req, res) => {
    console.log("Route", req.path);

    try {
      const { email, password } = req.body;
      console.log("Email", email);
      const userDetails = { email, password };
      const result = await addUser(userDetails);
      const user = {
        email: result.values[0],
        password: result.values[1],
      };
      const token = await accessTokenGenerator(user);
      console.log("Token", token);
      res.json(user);
    } catch (err) {
      res.json({ message: err });
    }
  });
};
