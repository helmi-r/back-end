const pasienRoute = require("express").Router();
const { PasienController } = require("../controllers");

pasienRoute.get("/", PasienController.getAllPasiens);
pasienRoute.post("/register", PasienController.register);

module.exports = pasienRoute;
