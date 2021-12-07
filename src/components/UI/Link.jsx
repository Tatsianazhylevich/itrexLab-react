import React from 'react';
import styled from 'styled-components';

export function Link({ ...props }) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}

const StyledLink = styled.a`
   margin-left: 20px;
   @media (max-width: 600px) {
    margin: 0;
  }
`;
