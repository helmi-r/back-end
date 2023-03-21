const { Router } = require("express");
const route = Router();
const mainEndpoint = "/api"

route.get(mainEndpoint, (req, res) => {
  res.status(200).json({
    message: "API Is Successful",
  });
});

// Routes
const pasienRoute = require("./pasien");
// Endpoints
route.use(`${mainEndpoint}/pasiens`, pasienRoute);

module.exports = route;
