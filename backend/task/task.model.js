const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    important: {
      type: Boolean,
      required: true,
    }
  },
  {
    collection: "tasks",
  }
);

const task = mongoose.model("tasks", taskSchema);

module.exports = task;
