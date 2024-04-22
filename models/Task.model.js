const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      //required: [true, "Task title is required."],
      trim: true,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        //required: true,
        ref: "Project._id",
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["todo", "in progress", "done"],
      default: "todo",
    },
    startDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
