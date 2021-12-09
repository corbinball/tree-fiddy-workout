const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
      type: "resistance",
      trim: true,
      required: "Enter a workout type",
      weight: Number,
      reps: Number,
      sets: Number,

      
      type: "cardio",
      trim: true,
      required: "Enter a workout type",
      distance: Number,
      
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a workout"
    },
    duration: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  });









module.exports = Workout;
