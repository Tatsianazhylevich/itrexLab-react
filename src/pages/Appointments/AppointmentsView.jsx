import React from 'react';
import { Header } from '../../components';
import { SelectDoctorForm } from '../../forms';
import { BoardCard, BoardHeader } from '../../modules';
import { WrapperStyles, MainStyles } from './AppointmentsView.styles';
import { MESSAGES } from '../../theme';

export function AppointmentsView() {
  return (
    <WrapperStyles className="wrapper">
      <Header name="Larry Prinston" position="Patient" />
      <MainStyles>
        <BoardCard>
          <BoardHeader title={MESSAGES.appointmentsViewTitle} />
          <SelectDoctorForm />
        </BoardCard>
      </MainStyles>
    </WrapperStyles>
  );
}
