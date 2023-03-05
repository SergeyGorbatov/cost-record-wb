const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://Sergey:Cthutq050298.@cluster0.fznqque.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.error(error);
  }
};

start()