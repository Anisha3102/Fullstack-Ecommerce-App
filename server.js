import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import chalk from "chalk";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
connectDB();
const app = express(); 
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoutes);

app.get("/", (req, res) => {
  res.send({
    message: " Welcome to E-commerce ",
  });
});

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
  console.log(chalk.blue(`http://localhost:${port}`));
});
