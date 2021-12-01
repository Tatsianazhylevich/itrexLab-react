import React from 'react';
import { Header } from '../../components';
import {
  NavMenu, BoardCard, BoardHeader, PatientCardList,
} from '../../modules';
import { messages, navButtons } from '../../shared';
import { WrapperStyled, MainStyled } from './DoctorView.styles';

export function DoctorWiew() {
  return (
    <WrapperStyled className="wrapper">
      <Header name="Miranda Nelson" position="Doctor" />
      <MainStyled>
        <NavMenu
          buttons={navButtons.doctorsButtons}
        />
        <BoardCard>
          <BoardHeader title={messages.doctorViewTitle} />
          <PatientCardList />
        </BoardCard>
      </MainStyled>
    </WrapperStyled>
  );
}
