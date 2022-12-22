const mongoose = require("mongoose");

let QuestionSchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    type: { type: Number, required: true },
    difficulty: {
      type: String,
      enum: ["hard", "medium", "easy"],
      required: true,
    },
    question: { type: String, required: true },
    correct_answers: { type: String, required: true },
    incorrect_answers: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("question", QuestionSchema);

module.exports = Question;
