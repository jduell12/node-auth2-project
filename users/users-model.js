const db = require("../data/db-connection");

module.exports = {
  getUsers,
  addUser,
  getUserById,
  getUsersBy,
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

function getUsersBy(filter) {
  return db("users").where(filter).orderBy("id");
}
