import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

const db = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
mongoose.connect(db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => console.log("SERVER STARTED"));



