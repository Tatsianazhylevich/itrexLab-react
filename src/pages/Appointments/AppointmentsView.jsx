import React from 'react';
import styled from 'styled-components';
import { Header, SelectDoctorForm } from '../../components';
import { BoardCard, BoardHeader } from '../components';

export function AppointmentsView() {
  return (
    <StyledWrapper className="wrapper">
      <Header name="Larry Prinston" position="Patient" />
      <StyledMain>
        <BoardCard>
          <BoardHeader title="Make an appointment" />
          <SelectDoctorForm />
        </BoardCard>
      </StyledMain>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
    max-width: 1920px;
    height: 1024px;
    padding: 0 64px;
    background: #E4EBFF;
    @media (max-width: 565px) {
      padding: 0;
    }
`;

const StyledMain = styled.div`
  padding: 40px 48px;
  max-width: 1792px;
  height: 896px;
  background-color:#F9FAFF;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px;
  @media (max-width: 565px) {
      padding: 40px 24px;
    }
`;
