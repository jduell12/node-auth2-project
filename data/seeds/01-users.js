exports.seed = function (knex) {
  return knex("users").insert([
    { name: "sam", password: "pass", department: "security" },
  ]);
};
