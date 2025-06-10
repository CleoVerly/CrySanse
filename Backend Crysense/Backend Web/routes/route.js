const express = require("express");
const article = require("./artikelRoutes.js");
const beratRoutes = require("./beratRoutes.js");
const tangisanRoutes = require("./tangisanRoutes.js");
const router = express.Router();

router.use("/artikel", article);
router.use("/berat-badan", beratRoutes);
router.use("/tangisan-bayi", tangisanRoutes);

module.exports = router;
