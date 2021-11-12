import React from 'react';
import styled from 'styled-components';

export function BoardCard({ children }) {
  return (
    <StyledBoardCard>
      {children}
    </StyledBoardCard>
  );
}

const StyledBoardCard = styled.section`
    margin-top: 56px;
    @media (max-width: 565px) {
        margin-top: 45px;
    }
    
`;
