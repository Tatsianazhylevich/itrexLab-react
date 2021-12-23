import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector} from 'shared'
import { MainPage } from '../Main';
import { MainStyled } from './DoctorView.styles';
import { userProfile } from '../Authorization/redux';
import { getUserProfile } from '../Authorization/redux/user/user.selector';
import { InnerDoctorRouter } from 'routes/InnerRouter';


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
        <InnerDoctorRouter /> 
      </MainStyled>
    </MainPage>
  );
}
