exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.string("username", 256).notNullable().unique();
    tbl.string("password", 256).notNullable();
    tbl.string("department", 256).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropIfTableExists("users");
};
