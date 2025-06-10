require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT;
const route = require("./routes/route.js");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(route);

app.use((err, _req, _res, next) => {
  console.error(err);
  next(err);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });
