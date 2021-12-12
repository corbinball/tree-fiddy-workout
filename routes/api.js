const router = require("express").Router();
const Workout = require("../models/Workout.js");


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {$addFields: {
        totalDuration: {$sum: '$exercises.duration'},
        totalWeight: {$sum: '$exercises.weight'},
        totalSets: {$sum: '$exercises.sets'},
        totalReps: {$sum: '$exercises.reps'},
        totalDistance: {$sum: '$exercises.distance'},
        numExercises: {$sum: '$exercises.type'}
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
    Workout.aggregate([
      {$addFields: {
        totalDuration: {$sum: '$exercises.duration'},
        totalWeight: {$sum: '$exercises.weight'},
        totalSets: {$sum: '$exercises.sets'},
        totalReps: {$sum: '$exercises.reps'},
        totalDistance: {$sum: '$exercises.distance'},
        numExercises: {$sum: '$exercises.type'}
      }
    }
    ])
    .sort({date: 1 })
    .limit(8)
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
        {_id: req.params.id}, {$push: {exercises: req.body} }, {new: true}
        )
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});




module.exports = router;
