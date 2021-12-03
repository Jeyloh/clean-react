import React from 'react';
import { StyledButton } from './Button.styled';

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
