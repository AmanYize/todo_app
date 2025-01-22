import styled from "styled-components";

export const BulletPoint = styled.li`
  &:last-child {
    color: #57cc99;
  }
  @media (max-width: 420px) {
    padding: 5px 0;
  }
`;

export const KeyContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px 0;
  font-size: 1rem;
  list-style-type: square;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 8px 0;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
