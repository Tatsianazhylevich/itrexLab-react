import React, { useEffect } from 'react';
import { useAppDispatch } from '../../shared';
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <MainPage>
      <MainStyled>
        <NavMenu
          buttons={navButtons.usersButtons}
        />
        <BoardCard>
          <BoardHeader
            title={messages.userViewTitle}
            isBtnVisible
          />
          <DoctorCardList />
        </BoardCard>
      </MainStyled> 
    </MainPage>
  );
}
