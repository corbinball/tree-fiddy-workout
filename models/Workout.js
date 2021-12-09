const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "Enter a workout type"
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
