import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 0;
  cursor: pointer;
`;

export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 1rem;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

// Ensure `isCompleted` is not forwarded to the DOM
export const Text = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isCompleted",
})`
  ::first-letter {
    text-transform: capitalize;
  }
  flex: 1;
  margin-left: 8px;
  font-size: 1.2rem;
  color: ${({ isCompleted }) => (isCompleted ? "#57cc99" : "#333")};
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

// DeleteIcon inherits styles from Text
export const DeleteIcon = styled(Text)`
  cursor: pointer;
`;
