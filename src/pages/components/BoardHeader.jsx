import React from 'react';
import styled from 'styled-components';

export function BoardHeader({ title }) {
  return (
    <StyledBoardHeader className="board_header card-header">
      <StyledBoardTitle>{title}</StyledBoardTitle>
    </StyledBoardHeader>
  );
}

const StyledBoardTitle = styled.h2`
    color: #202225;
    font-size: 24px;
    @media (max-width: 565px) {
      font-size: 20px;
    }
`;

const StyledBoardHeader = styled.div`
  padding-bottom: 30px;
`;
