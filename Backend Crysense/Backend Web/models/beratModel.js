const mongoose = require("mongoose");

const beratSchema = mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
    },
    umur: {
      type: Number,
      required: true,
    },
    berat: {
      type: Number,
      required: true,
    },
    tinggi: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const beratBadan = mongoose.model("WeightList", beratSchema);

module.exports = beratBadan;
