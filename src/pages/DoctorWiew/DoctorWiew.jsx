import React from 'react';
import { Header } from '../../components';
import {
  NavMenu, BoardCard, BoardHeader, PatientCardList,
} from '../../modules';
import { StyledWrapper, StyledMain } from './DoctorView.styles';

export function DoctorWiew() {
  return (
    <StyledWrapper className="wrapper">
      <Header name="Miranda Nelson" position="Doctor" />
      <StyledMain>
        <NavMenu
          buttons={[
            { title: 'Patients', id: 1 },
            { title: 'Resolutions', id: 2 }]}
        />
        <BoardCard>
          <BoardHeader title="My Patients" />
          <PatientCardList />
        </BoardCard>
      </StyledMain>
    </StyledWrapper>
  );
}
