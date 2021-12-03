import styled, { css } from 'styled-components';

export const StyledHeading = styled.span`
  h1 {
    font-size: 2.4rem;
    margin-bottom: 16px;
  } /* =24px */

  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  } /* =24px */

  h3 {
    font-size: 1.8rem;
    margin-bottom: 16px;
  } /* =24px */

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${(props) =>
    props.underlined &&
    css`
      text-decoration: underlined;
    `}
  ${(props) =>
    props.noMargin &&
    css`
      margin-bottom: 0;
    `}
`;
