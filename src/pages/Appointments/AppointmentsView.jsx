import React from 'react';
import { Header } from '../../components';
import { SelectDoctorForm } from '../../forms';
import { BoardCard, BoardHeader } from '../../modules';
import { StyledWrapper, StyledMain } from './AppointmentsView.styles';

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
