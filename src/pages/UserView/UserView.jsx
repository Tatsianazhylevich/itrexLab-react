import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components';
import {
  NavMenu, BoardCard, BoardHeader, DoctorCardList,
} from '../../modules';
import { USER_APPOINTMENT_PATH } from '../../routes/routes';
import { MESSAGES } from '../../utils';
import { WrapperStyles, MainStyles } from './UserView.styles';
import { navButtons } from '../../utils/navButtons';

export function UserView() {
  const history = useHistory();

  const getAppointment = () => {
    history.push(USER_APPOINTMENT_PATH);
  };

  return (
    <WrapperStyles className="wrapper">
      <Header name="Larry Prinston" position="Patient" />
      <MainStyles>
        <NavMenu
          buttons={navButtons.usersButtons}
        />
        <BoardCard>
          <BoardHeader
            title={MESSAGES.userViewTitle}
            getAppointment={getAppointment}
            isBtnVisible
          />
          <DoctorCardList />
        </BoardCard>
      </MainStyles>
    </WrapperStyles>
  );
}
