import React, { useState } from "react";
import { Container } from "./styles";
import Form from "../Form";

function Todo() {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <Container>
      <h2>List of Todos</h2>
      {/* Form component */}
      <Form input={input} setInput={setInput} />
      {/* Todo list */}
      {/* Key */}
      {/* Author component */}
    </Container>
  );
}

export default Todo;
