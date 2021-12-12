import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '..';
import { userProfile } from '../../pages/Authorization/redux';
import { getUserProfile } from '../../pages/Authorization/redux/user/user.selector';
import { WrapperStyled } from './Wrapper.styles';

export function Wrapper({ children }) {
  const dispatch = useDispatch();
  const user = useSelector(getUserProfile);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <WrapperStyled className="wrapper">
      <Header name={`${user.first_name} ${user.last_name}`} position={`${user.role_name}`} />
      {children}
    </WrapperStyled>
  );
}
