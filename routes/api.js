const router = require("express").Router();
const workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
    workout.find({})
    .then(dbworkout => {
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




module.exports = router;
