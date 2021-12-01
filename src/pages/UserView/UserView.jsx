import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components';
import {
  NavMenu, BoardCard, BoardHeader, DoctorCardList,
} from '../../modules';
import { USER_APPOINTMENT_PATH } from '../../routes/routes';
import { messages, navButtons } from '../../shared';
import { WrapperStyled, MainStyled } from './UserView.styles';

export function UserView() {
  const history = useHistory();

  const getAppointment = () => {
    history.push(USER_APPOINTMENT_PATH);
  };

  return (
    <WrapperStyled className="wrapper">
      <Header name="Larry Prinston" position="Patient" />
      <MainStyled>
        <NavMenu
          buttons={navButtons.usersButtons}
        />
        <BoardCard>
          <BoardHeader
            title={messages.userViewTitle}
            getAppointment={getAppointment}
            isBtnVisible
          />
          <DoctorCardList />
        </BoardCard>
      </MainStyled>
    </WrapperStyled>
  );
}
