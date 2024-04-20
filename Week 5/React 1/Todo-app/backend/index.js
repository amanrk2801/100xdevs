// Write basic express boilerplate code,
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayload);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(201).json({
    msg: "Todo created successfully",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos: todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayload);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  await todo.update({
    _id: req.body.id,
  },{
    completed: true,
  });
  res.status(201).json({
    msg: "Todo updated successfully",
  });
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
