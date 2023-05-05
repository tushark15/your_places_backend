const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const moongose = require("mongoose");
const cors =  require("cors");
const fs = require("fs");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if(req.file){
    fs.unlink(req.file.path, err => {
      console.log(err)
    });
  }
  // if response has been sent
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error has occured" });
});

moongose
  .connect(
    "mongodb+srv://Tushar:Tushar123@clusters.z1vgrpf.mongodb.net/mern?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8888);
  })
  .catch((err) => {
    console.log(err);
  });
