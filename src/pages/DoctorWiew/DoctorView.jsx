import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainPage } from '../Main';
import {
  NavMenu, BoardCard, BoardHeader,
} from '../../modules';
import { PatientCardList } from './components';
import { messages, navButtons } from '../../shared';
import { MainStyled } from './DoctorView.styles';
import { userProfile } from '../Authorization/redux';
import { getUserProfile } from '../Authorization/redux/user/user.selector';

export function DoctorView() {
  const dispatch = useDispatch();
  const user = useSelector(getUserProfile);

  useEffect(() => {
    if (user.role_name === 'Doctor') {
      dispatch(userProfile());
    }
  }, [dispatch, user.role_name]);
  return (
    <MainPage>
      <MainStyled>
        <NavMenu
          buttons={navButtons.doctorsButtons}
        />
        <BoardCard>
          <BoardHeader title={messages.doctorViewTitle} />
          <PatientCardList />
        </BoardCard>
      </MainStyled>
    </MainPage>
  );
}
