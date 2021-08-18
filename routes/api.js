const router = require("express").Router();
const Workout = require("../models/Workout.js");
const Exercise = require("../models/Exercise.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .populate("exercises")
    .exec(function (err, workouts) {
      if (!err) {
        res.json(workouts);
        console.log(workouts);
      } else {
        console.log(err);
      }
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;