import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/testing", {})
  .then((db) => console.log("conectado"))
  .catch((err) => console.log(err));