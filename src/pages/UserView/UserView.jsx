import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components';
import {
  NavMenu, BoardCard, BoardHeader, DoctorCardList,
} from '../../modules';
import { USER_APPOINTMENT_PATH } from '../../routes/routes';
import { StyledWrapper, StyledMain } from './UserView.styles';

export function UserView() {
  const history = useHistory();

  const getAppointment = () => {
    history.push(USER_APPOINTMENT_PATH);
  };

  return (
    <StyledWrapper className="wrapper">
      <Header name="Larry Prinston" position="Patient" />
      <StyledMain>
        <NavMenu
          buttons={[
            { title: 'Profile', id: '1' },
            { title: 'Appointments', id: '2' },
            { title: 'Resolutions', id: '3' }]}
        />
        <BoardCard>
          <BoardHeader title="My Appointments" getAppointment={getAppointment} isBtnVisible />
          <DoctorCardList />
        </BoardCard>
      </StyledMain>
    </StyledWrapper>
  );
}
