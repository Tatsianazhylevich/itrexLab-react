import React from 'react';
import { BoardCardStyled } from './BoardCard.styles';

export function BoardCard({ children }) {
  return (
    <BoardCardStyled>
      {children}
    </BoardCardStyled>
  );
}
