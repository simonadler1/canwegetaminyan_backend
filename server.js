import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import webPush from "web-push";
import { connectDB } from "./config/db.js";

// route files
import minyan from "./routes/minyan.js";
import notifications from "./routes/notifications.js";

// load env
dotenv.config({ path: "./config/config.env" });

//connect db
connectDB();

const app = express();

//body parser
app.use(express.json());

//CORS
app.use(cors());

// //set up push notications VAPID keys
// webPush.setVapidDetails(
//   "mailto:notifications@canwegetaminyan.com",
//   process.env.VAPID_PUBLIC,
//   process.env.VAPID_PRIVATE
// );

// logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/minyan", minyan);
// app.use("/subscriber", notifications);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);

// handle unhandled rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`error: ${err}`);
  //close server
  server.close(() => process.exit(1));
});
