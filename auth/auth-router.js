const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service");
const constants = require("../config/constants");

router.post("/register", (req, res) => {});

module.exports = router;
