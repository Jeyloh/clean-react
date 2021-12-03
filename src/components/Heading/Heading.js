import React from 'react';
import { StyledHeading } from './Heading.styled';

export default function Heading(props) {
  const { component, children } = props;

  return (
    <StyledHeading {...props}>
      {React.createElement(component, props, children)}
    </StyledHeading>
  );
}
