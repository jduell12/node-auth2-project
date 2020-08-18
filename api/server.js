const express = require("express");
const cors = require("cors");

const userRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/users", userRouter);
server.use("/api", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "working" });
});

module.exports = server;
