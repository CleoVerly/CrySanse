const artikel = require("../models/artikelModel");

exports.getArtikel = async (req, res) => {
  try {
    const fetchArtikel = await artikel.find();
    if (fetchArtikel.length === 0) {
      res.status(404).json({ message: "Artikel Tidak Ditemukan" });
    } else {
      res.status(200).json({ fetchArtikel });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postArtikel = async (req, res) => {
  try {
    const { title, description } = req.body;
    let imageUrl = null;
    if (req.file) {
      imageUrl = `/uploads/imgArtikel/${req.file.filename}`;
    }
    const dataArtikelBaru = {
      title: title,
      description: description,
      imageUrl: imageUrl,
    };

    const artikelBaru = await artikel.create(dataArtikelBaru);
    res.status(201).json({ message: "Data Berhasil Ditambahkan", artikelBaru });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getByIdArtikel = async (req, res) => {
  try {
    const postArtikel = await artikel.findOne({ _id: req.params.id });
    res.status(200).json({ message: "Data Berhasil Ditemukan", postArtikel });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
