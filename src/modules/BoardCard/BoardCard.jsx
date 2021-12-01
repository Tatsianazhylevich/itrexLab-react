import React from 'react';
import { BoardCardStyles } from './BoardCard.styles';

export function BoardCard({ children }) {
  return (
    <BoardCardStyles>
      {children}
    </BoardCardStyles>
  );
}
