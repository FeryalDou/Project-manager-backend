const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    name: {
      type: String,
      required: [true, "Project name is required."],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },

    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
