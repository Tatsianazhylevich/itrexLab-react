import React from 'react';
import { Header } from '../../components';
import { SelectDoctorForm } from '../../forms';
import { BoardCard, BoardHeader } from '../../modules';
import { WrapperStyled, MainStyled } from './AppointmentsView.styles';
import { messages } from '../../shared';

export function AppointmentsView() {
  return (
    <WrapperStyled className="wrapper">
      <Header name="Larry Prinston" position="Patient" />
      <MainStyled>
        <BoardCard>
          <BoardHeader title={messages.appointmentsViewTitle} />
          <SelectDoctorForm />
        </BoardCard>
      </MainStyled>
    </WrapperStyled>
  );
}
