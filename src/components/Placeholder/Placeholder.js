import React from 'react';
import { StyledPlaceholder } from './Placeholder.styled';

function Placeholder(props) {
  return <StyledPlaceholder {...props}>{props.children}</StyledPlaceholder>;
}

export default Placeholder;
