import express from "express";
import {
  createMinyan,
  getMinyan,
  updateMinyan,
  deleteMinyan,
} from "../controllers/minyan.js";
const router = express.Router();

router.route("/").post(createMinyan);

router.route("/:id").get(getMinyan).put(updateMinyan).delete(deleteMinyan);

export default router;
