/*
// Mongoose Schema
* Todo {
    title: String,
    description: String,
    completed: Boolean,
}
*/

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:WRLaT7n13BTMj0Yw@cluster0.nixnuza.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
