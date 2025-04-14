import express from "express";
import {
  createTask,
  shareTask,
  getAllTasks,
  getMyTasks,
  getSharedTasks,
} from "../controllers/task.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/create", authenticate, createTask);
router.post("/share", authenticate, shareTask);
router.get("/", authenticate, getAllTasks);
router.get("/my-tasks", authenticate, getMyTasks);
router.get("/shared-tasks", authenticate, getSharedTasks);

export default router;
