const { response } = require("express");

const createUser = (req, res = reponse) => {
  res.json({
    ok: true,
    msg: "new",
  });
};

const login = (req, res = reponse) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const renewUser = (req, res = reponse) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { createUser, login, renewUser };
