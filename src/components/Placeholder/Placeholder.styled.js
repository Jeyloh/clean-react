import styled, { css } from 'styled-components';

export const StyledPlaceholder = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem;

  ${(props) =>
    props.border &&
    css`
      border: 1px solid black;
      border-radius: 0.5rem;
    `}
`;
