const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const Users = require("../users/users-model");
const { isValid, loginValid } = require("../users/users-service");
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
          const token = signToken(user);
          res.status(201).json({ data: newUser, token });
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

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (loginValid(req.body)) {
    Users.getUsersBy({ username: username }).then(([user]) => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({ message: "Welcome", token });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    });
  } else {
    res.status(400).json({ message: "Please provide a username and password" });
  }
});

//creates a jwt token
function signToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department,
  };

  const secret = constants.jwtSecret;

  const options = {
    expiresIn: "1m",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
