const {
  getBeratBadan,
  postBeratBadan,
  getIdBeratBadan,
} = require("../controllers/beratController");
const express = require("express");

const router = express.Router();

router.get("/", getBeratBadan);
router.post("/", postBeratBadan);
router.get("/:id", getIdBeratBadan);


module.exports = router;
