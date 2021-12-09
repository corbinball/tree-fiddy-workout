const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "Enter a workout type",
      weight: Number,
      reps: Number,
      sets: Number,


    //   type: "cardio",
    //   trim: true,
    //   required: "Enter a workout type",
    //   distance: Number,
      
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







const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
