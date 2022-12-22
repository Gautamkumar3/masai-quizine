const express = require("express");
const Question = require("../Schema/question.schema");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allQuestion = await Question.find();
    res.status(200).send(allQuestion);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

app.get("/all", async (req, res) => {
  const { category = "Book", level = "easy", limit = "12" } = req.query;
  console.log(category, level, limit);
  try {
    let questionCategory = await Question.find({
      $and: [{ difficulty: level }, { category: category }],
    }).limit(limit);
    res.status(200).send(questionCategory);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

module.exports = app;
