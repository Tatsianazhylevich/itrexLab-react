import React from 'react';
import styled from 'styled-components';
import { CardHeader, CardMain } from '.';

export function Patients({
  avatar, firstName, lastName, status, description, time,
}) {
  return (
    <StyledCard>
      <CardHeader avatar={avatar} firstName={firstName} lastName={lastName} status={status} />
      <CardMain description={description} time={time} />
    </StyledCard>
  );
}

const StyledCard = styled.li`
    width: 406px;
    height: 264px;
    margin-right: 20px;
    margin-bottom: 24px;
    padding: 24px 32px 40px;
    background: white;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 12px;
    @media(max-width: 1024px) {
      width: 100%;
    }
`;
