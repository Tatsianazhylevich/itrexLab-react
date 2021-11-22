import React from 'react';
import styled from 'styled-components';

export function Title({ ...props }) {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
}

const StyledTitle = styled.div`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  color: #202225;
  @media (max-width: 600px) {
    margin-top: 6vh;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
  }
`;
