import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import userrouter from "./routes/user.js";
import blogroutr from "./routes/blog.js";
import cors from "cors";

config({
  path: "./data/config.env",
});

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Mern_first_project",
  })
  .then(() => console.log("mongodb is connected"));

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use("/api/user", userrouter);
app.use("/api/blog", blogroutr);

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`),
);
