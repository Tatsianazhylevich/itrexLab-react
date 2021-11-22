import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Header, NavMenu } from '../../components';
import { BoardCard, BoardHeader } from '../components';
import { DoctorList } from './components';
import { USER_APPOINTMENT_PATH } from '../../components/routes';
// import patients from './patientsMock';

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
          <DoctorList />
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
  padding: 40px 0 40px 48px;
  max-width: 1792px;
  height: 896px;
  background-color:#F9FAFF;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px;
  @media (max-width: 565px) {
      padding: 40px 24px;
    }
`;
