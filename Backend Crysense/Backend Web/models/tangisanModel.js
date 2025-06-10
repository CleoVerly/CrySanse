const mongoose = require("mongoose");

const tangisanSchema = mongoose.Schema(
  {
    fileMetadata: {
      originalname: String,
      mimetype: String,
      size: Number,
    },
    audioContent: Buffer,
    predictionOutput: {
      predicted_class: String,
      confidence: Number,
    },
  },
  {
    timestamps: true,
  }
);

const jenisTangisan = mongoose.model("soundlist", tangisanSchema);

module.exports = jenisTangisan;
