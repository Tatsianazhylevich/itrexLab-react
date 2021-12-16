import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MainPage } from '../Main';
import {
  NavMenu, BoardCard, BoardHeader,
} from '../../modules';
import { DoctorCardList } from './components';
import { USER_APPOINTMENT_PATH } from '../../routes/routes';
import { messages, navButtons } from '../../shared';
import { userProfile } from '../Authorization/redux';
import { MainStyled } from './UserView.styles';

export function UserView() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  const getAppointment = () => {
    history.push(USER_APPOINTMENT_PATH);
  };

  return (
    <MainPage>
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
    </MainPage>
  );
}
