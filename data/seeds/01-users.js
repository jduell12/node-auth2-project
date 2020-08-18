exports.seed = function (knex) {
  return knex("users").insert([
    { username: "sam", password: "pass", department: "security" },
  ]);
};
