import express from "express";
import dotenv from "dotenv";

// load env
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
