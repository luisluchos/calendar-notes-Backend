const { response } = require("express");

const createUser = (req, res = reponse) => {
  const { name, email, password } = req.body;
  return res.json({
    ok: true,
    msg: "new",
    name,
    email,
    password,
  });
};

const login = (req, res = reponse) => {
  const { email, password } = req.body;

  return res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const renewToken = (req, res = reponse) => {
  return res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { createUser, login, renewToken };
