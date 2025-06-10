const {
  getArtikel,
  postArtikel,
  getByIdArtikel,
} = require("../controllers/artikelController.js");

const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); //
const router = express.Router();

const uploadDir = path.join(__dirname, "../uploads/imgArtikel/");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(uploadDir)) {
      try {
        fs.mkdirSync(uploadDir, { recursive: true });
        console.log(`Directory created successfully: ${uploadDir}`);
      } catch (error) {
        console.error(`Error creating directory ${uploadDir}:`, error);
        return cb(error);
      }
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.get("/", getArtikel);
router.post("/", upload.single("imageUrl"), postArtikel);
router.get("/:id", getByIdArtikel);

module.exports = router;
