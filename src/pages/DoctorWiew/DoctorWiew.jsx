import React from 'react';
import { Header } from '../../components';
import {
  NavMenu, BoardCard, BoardHeader, PatientCardList,
} from '../../modules';
import { MESSAGES } from '../../utils';
import { WrapperStyles, MainStyles } from './DoctorView.styles';
import { navButtons } from '../../utils/navButtons';

export function DoctorWiew() {
  return (
    <WrapperStyles className="wrapper">
      <Header name="Miranda Nelson" position="Doctor" />
      <MainStyles>
        <NavMenu
          buttons={navButtons.doctorsButtons}
        />
        <BoardCard>
          <BoardHeader title={MESSAGES.doctorViewTitle} />
          <PatientCardList />
        </BoardCard>
      </MainStyles>
    </WrapperStyles>
  );
}
