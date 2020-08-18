const db = require("../data/db-connection");

module.exports = {
  getUsers,
};

function getUsers() {
  return db("users").orderBy("id");
}
