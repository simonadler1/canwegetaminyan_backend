import express from "express";
import { sendNotification } from "../controllers/notifications.js";
const router = express.Router();

router.route("/").post(sendNotification);

export default router;
