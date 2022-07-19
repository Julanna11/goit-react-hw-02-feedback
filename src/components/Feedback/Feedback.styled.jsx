import styled from '@emotion/styled';

export const Button = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

export const ButtonList = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ButtonClick = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 4px;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;

  &:hover,
  &:focus {
    background: lightgreen;
  }
`;
