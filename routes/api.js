const router = require("express").Router();
const workout = require("../models/Workout.js");


router.get("/api/workouts", (req, res) => {
    workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({}, res) => {
    workout.find({})
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(
        {_id: req.params.id}, {exercise: req.body})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});




module.exports = router;
