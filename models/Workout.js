const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [{
    type: {
      type: String,
      trim: true,
      required: true
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    weight: {
      type: Number,
      //required: "Enter weight"
    }, 
    reps: {
        type: Number,
        //required: "Enter reps"
      }, 
    sets: {
        type: Number,
        //required: "Enter sets"
      }, 
    distance: {
        type: Number,
        //required: "Enter disantce"
      }, 
    duration: {
      type: Number,
      required: true
    },
    }],
    date: {
      type: Date,
      default: Date.now
    }
  });







const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
