import React from 'react';
import { StyledBoardCard } from './BoardCard.styles';

export function BoardCard({ children }) {
  return (
    <StyledBoardCard>
      {children}
    </StyledBoardCard>
  );
}
