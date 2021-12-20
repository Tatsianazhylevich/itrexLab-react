import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  Button, Title, Footer,
} from '../../components';
import { ValidationForSignInForm } from './ValidationForSignInForm';
import { loginUser, userProfile, getStatus } from '../../pages/Authorization/redux';
import { SIGN_UP_PATH, RESTORE_PASSWORD_PATH, PATIENT_VIEW_PATH } from '../../routes/routes';
import { FormStyled, InputEmail, InputPassword } from './SignInForm.styles';
import { messages } from '../../shared';

export function SignInForm() {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const loginStatus = useSelector(getStatus);

  useEffect(() => {
    if (loginStatus === 'OK') {
      push(PATIENT_VIEW_PATH);
    }
  }, [push, loginStatus]);

  const initialValues = {
    email: '',
    password: '',
  };

  const submitSignInForm = (values) => {
    const userData = {
      userName: values.email,
      password: values.password,
    };
    console.log(userData);
    dispatch(loginUser(userData));
    dispatch(userProfile());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationForSignInForm}
      onSubmit={submitSignInForm}
    >
      {({ handleSubmit, isValid, dirty }) => (
        <FormStyled onSubmit={handleSubmit}>
          <Title>
            <p>Sign In</p>
          </Title>
          <InputEmail
            label="Email"
            name="email"
            type="email"
            placeholder="bart@gmail.com"
            fontSize="0"
          />
          <InputPassword
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            fontSize="0"
          />
          <Button isDisabled={!isValid || !dirty} type="submit">Sign In</Button>
          <Link to={RESTORE_PASSWORD_PATH}>Forgot password?</Link>
          <Footer footerText={messages.signInFooterText} footerLink={SIGN_UP_PATH} footerLinkText="Sign Up" />
        </FormStyled>
      )}
    </Formik>
  );
}
