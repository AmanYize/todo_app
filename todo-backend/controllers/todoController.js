const mongoose = require("mongoose");
const Todos = require("../dbTodos");

// Get Todos List

const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find().sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Create Todo

const createTodo = async (req, res) => {
  const dbTodo = req.body;
  try {
    const newTodo = await Todos.create(dbTodo);
    res.status(201).send(newTodo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Update a Todo

const updateTodo = async (req, res) => {
  const { id: id } = req.params;
  const todo = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is todo with id ${id}`);
    }
    const todoID = { _id: id };
    const update = { completed: true };
    const updateTodo = await Todos.findOneAndUpdate(todoID, update);
    if (!updateTodo) {
      return res.status(404).send(`There is todo with id ${id}`);
    }
    res.status(200).send(updateTodo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Delete a Todo

const deleteTodo = async (req, res) => {
  const { id: id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is todo with id ${id}`);
    }
    const todoID = { _id: id };
    const deleteTodo = await Todos.findOneAndDelete(todoID);

    res.status(200).send(deleteTodo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
