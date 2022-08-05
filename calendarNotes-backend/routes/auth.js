/*
Rutas de usuarios /Auth
host + /api/auth
*/

const express = require("express");
const router = express.Router();

const { createUser, login, renewUser } = require("../controllers/auth");

router.post("/new", createUser);

router.post("/", login);

router.get("/renew", renewUser);

module.exports = router;
