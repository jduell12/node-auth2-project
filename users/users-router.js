const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, (req, res) => {
  const departmnet = req.jwt.department;

  Users.getUsers()
    .then((users) => {
      let deptUsers = users.filter((user) => user.department === departmnet);
      res.status(200).json({ data: deptUsers });
    })
    .catch((err) => res.status(500).json("You shall not pass"));
});

module.exports = router;
