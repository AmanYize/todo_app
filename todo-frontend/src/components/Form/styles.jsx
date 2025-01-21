import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  background-color: #f7f7f7;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:focus {
    border: 1px solid #80ed99;
    outline: none;
  }
  &:hover {
    border: 1px solid #80ed99;
  }
`;

export const Button = styled.button`
  background-color: #57cc99;
  padding: 8px 12px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: 1px solid #a3b18a;
  border-radius: 18px;
  cursor: pointer;
  margin-left: 1em;
  &:hover {
    background-color: #c7f9cc;
    border: 1px solid #dad7cd;
    color: #2d313f;
  }
  @media (max-width: 420px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
  }
`;
