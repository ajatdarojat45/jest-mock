const express = require("express");
const app = express();
const UserController = require("./UserController");

app.get("/users", UserController.findAll);

module.exports = app;
