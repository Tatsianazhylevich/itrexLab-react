import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared';
import { MainPage } from 'pages';
import { userProfile, getUserProfile } from '../Authorization/redux';
import { MainStyled } from './UserView.styles';
import { InnerUserRouter, InnerDoctorRouter } from 'routes';
import {  useLocation } from 'react-router-dom'; 





export function UserView() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserProfile);
  console.log(location);
  

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <MainPage>
      <MainStyled>
        {user?.role_name === 'Patient' ? <InnerUserRouter /> : <InnerDoctorRouter />}
      </MainStyled> 
    </MainPage>
  );
}
