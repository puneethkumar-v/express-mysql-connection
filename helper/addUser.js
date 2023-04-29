const { generateBcryptPassword } = require("./bcryptPassword");
const { connection } = require("../db/db.js");

async function addUser(userDetails) {
  const { email, password } = userDetails;

  console.log("email", email);

  const bcryptPassword = await generateBcryptPassword(password);

  const newUserRes = await connection.query(
    "INSERT INTO user (email, password) VALUES (?, ?)",
    [email, bcryptPassword],
    (err, result) => {
      if (err) throw err;
      return result;
    }
  );

  return newUserRes;
}

module.exports = addUser;
