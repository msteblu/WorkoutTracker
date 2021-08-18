const router = require("express").Router();
const Workout = require("../models/Workout.js");
const Exercise = require("../models/Exercise.js");
const mongojs = require("mongojs");

router.get("/api/workouts", (req, res) => {
  Workout.find({}).exec(function (err, workouts) {
    if (!err) {
      res.json(workouts);
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

router.put("/api/workouts/:id", (req, res) => {
  Exercise.create(req.body)
    .then(({ _id }) =>
      Workout.findOneAndUpdate(
        { _id: mongojs.ObjectId(req.params.id) },
        // {},
        { $push: { exercises: _id } },
        { new: true }
      )
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    // .populate("exercises")
    .exec(function (err, workouts) {
      if (!err) {
        res.json(workouts);
      } else {
        console.log(err);
      }
    });
});

module.exports = router;
