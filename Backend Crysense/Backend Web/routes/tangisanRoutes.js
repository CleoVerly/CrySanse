const express = require("express");
const {
  getTangisanBayi,
  postTangisanBayi,
  getIdTangisanBayi,
} = require("../controllers/tangisanController");

const router = express.Router();
const multer = require("multer");
const upload = multer();

router.get("/", getTangisanBayi);
router.post("/", upload.single("suara"), postTangisanBayi);
router.get("/:id", getIdTangisanBayi);

module.exports = router;
