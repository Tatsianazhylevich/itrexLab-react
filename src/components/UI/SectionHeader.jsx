import React from 'react';
import styled from 'styled-components';

export function SectionHeader({ number, text }) {
  return (
    <StyledContainer>
      <StyledNumber>{number}</StyledNumber>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
    display: flex;
    margin-bottom: 40px;

`;

const StyledNumber = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    border: 1px solid #A1ABC9;
    border-radius: 50%;
    font-size: 17px;
    line-height: 24px;
    color: #A1ABC9;
`;
const StyledText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    line-height: 24px;
    color: #A1ABC9;
`;
