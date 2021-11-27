import React from 'react';
import { StyledLink } from './Link.styles';

export function Link({ ...props }) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}
