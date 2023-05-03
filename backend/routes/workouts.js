import express from "express";
import {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// POST a new workout
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
router.patch("/", updateWorkout);

export default router;
