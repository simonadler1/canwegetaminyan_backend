import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

// route files
import minyan from "./routes/minyan.js";

// load env
dotenv.config({ path: "./config/config.env" });

const app = express();

// logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/minyan", minyan);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
