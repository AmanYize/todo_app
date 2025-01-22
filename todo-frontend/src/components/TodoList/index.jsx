import React from "react";
import { ListContainer, Row, Text, DeleteIcon } from "./styles";
import axios from "../../axios";
function TodoList({ todos, fetchData }) {
  console.log(todos, "hi");

  const updateTodo = async (id) => {
    const todo = todos.find((t) => t._id === id); // Find the todo by ID
    try {
      const response = await axios.put(`/todos/${id}`, {
        completed: !todo.completed, // Toggle completed status
      });
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <ListContainer>
        {/* render all todos in bullet points */}
        {todos.map((todo) => (
          <Row key={todo._id}>
            <Text
              onClick={() => updateTodo(todo._id)}
              isCompleted={todo.completed}
            >
              {todo.text}
            </Text>
            <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
          </Row>
        ))}
      </ListContainer>
    </div>
  );
}

export default TodoList;
