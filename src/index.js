import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://vishalKumar:vishalKumar123@recipes.1p37wal.mongodb.net/recipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(5000, () => console.log("SERVER STARTED"));
