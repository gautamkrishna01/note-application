const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRouter");

app.use(express.json());

//routes
app.use("/api/note/", noteRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/note")
  .then(() => {
    console.log("connection the database is established");
  })
  .catch((error) => {
    console.log("error connection while connecting database");
  });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
