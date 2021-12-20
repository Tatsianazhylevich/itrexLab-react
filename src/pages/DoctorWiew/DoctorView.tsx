import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector} from '../../shared/hooks/hooks'
import { MainPage } from '../Main';
import {
  NavMenu, BoardCard, BoardHeader,
} from '../../modules';
import { PatientCardList } from './components';
import { messages, navButtons } from '../../shared';
import { MainStyled } from './DoctorView.styles';
import { userProfile } from '../Authorization/redux';
import { getUserProfile } from '../Authorization/redux/user/user.selector';
import { InnerDoctorRoute } from 'routes/innerRoute';


export function DoctorView() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserProfile);

  useEffect(() => {
    if (!user) {
      dispatch(userProfile());
    }
  }, []);
  return (
    <MainPage>
      <MainStyled>
        <InnerDoctorRoute /> 
      </MainStyled>
    </MainPage>
  );
}
