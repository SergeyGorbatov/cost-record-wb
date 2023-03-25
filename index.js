require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorMiddleware = require("./src/middlewares/error-middleware");

const PORT = process.env.PORT || 3005;
const app = express();
const router = require("./src/router/index");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "*", // Разрешаем запросы с любых доменов
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Разрешаем все методы
  allowedHeaders: "Content-Type, Authorization", // Разрешаем эти заголовки
}));
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server has been started = ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
