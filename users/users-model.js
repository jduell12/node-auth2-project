const db = require("../data/db-connection");

module.exports = {
  getUsers,
  addUser,
  getUserById,
};

function getUsers() {
  return db("users").orderBy("id");
}

function addUser(user) {
  return db("users").insert(user).returning("id");
}

function getUserById(id) {
  return db("users").where({ id }).first();
}
