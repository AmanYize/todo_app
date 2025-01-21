import React from "react";
import { FormContainer, Input, Button } from "./styles";
function Form() {
  return (
    <FormContainer>
      <Input value="" onChange={() => {}} type="text" role="input" />
      <Button type="submit">Add</Button>
    </FormContainer>
  );
}

export default Form;
