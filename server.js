import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import chalk from "chalk";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Server is listening");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    chalk.blue(`\nServer is running on ${process.env.DEV_MODE} mode at ${PORT}`)
  );
  console.log(chalk.blue(`http://localhost:${PORT}`));
});
