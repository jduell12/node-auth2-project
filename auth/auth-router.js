const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service");
const constants = require("../config/constants");

router.post("/register", (req, res) => {
  const user = req.body;

  if (isValid(user)) {
    //get the number of rounds from the enviornment or set to 12
    const rounds = process.env.BCRYPT_ROUNDS || 12;

    //hash password
    const hash = bcryptjs.hashSync(user.password, rounds);
    user.password = hash;

    //add user to the database
    Users.addUser(user)
      .then((user) => {
        Users.getUserById(user).then((newUser) => {
          res.status(201).json({ data: newUser });
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res
      .status(400)
      .json({ message: "Please provide username, password and departmnet" });
  }
});

module.exports = router;
