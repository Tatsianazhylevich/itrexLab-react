import React from 'react';
import styled from 'styled-components';
import backgroud from '../../assets/bg.jpg';

export function Container({ ...props }) {
  return (
    <StyledContainer {...props}>
      {props.children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    background: url(${backgroud}) no-repeat;
`;
