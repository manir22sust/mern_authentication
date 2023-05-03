import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import workoutRoutes from "./routes/workouts.js";
import userRoutes from "./routes/user.js";

dotenv.config();
//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
//[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose7 errors in nodejs.

// mongoose.set("strictQuery", false);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(" connected to db && Listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
