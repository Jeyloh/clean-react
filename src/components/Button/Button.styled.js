import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 1rem 0;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: box-shadow 100ms ease-in;

  &:active {
    box-shadow: none;
  }

  ${(props) =>
    props.primary &&
    css`
      border: 3px solid ${props.theme.colors.primary};
      background: ${props.theme.colors.primary};
      color: black;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: white;
      border: 3px solid ${props.theme.colors.primary};
      color: black;
    `}
  ${(props) =>
    props.mr &&
    css`
      margin-right: 0.5rem;
    `}
`;
