const router = require("express").Router();
const Workout = require("../models/Workout.js");


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {$addFields: {
        totalDuration: {$sum: '$exercises.duration'},
      }
      }
    ])
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({}, res) => {
    Workout.find({})
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        {_id: req.params.id}, {exercise: req.body})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});




module.exports = router;
