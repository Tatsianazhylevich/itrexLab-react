import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector, messages } from 'shared';
import { Formik } from 'formik';
import {
  Button, Title, Footer,
} from 'components';
import {
  FormStyled, InputName, InputEmail, InputPassword, InputConfirmPassword,
} from './SignUpForm.styles';
import { createUser, getStatus } from '../../redux';
import { ValidationForSignUpForm } from './ValidationForSignUpForm';
import { SIGN_IN_PATH, PATIENT_VIEW_PATH } from 'routes/routes';
import { SignUpTypes } from 'pages';

export function SignUpForm() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getStatus);

  useEffect(() => {
    if (loginStatus === 'Created') {
      history.push(PATIENT_VIEW_PATH);
    }
  }, [loginStatus]);

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const sumbitSignUp = async (values: SignUpTypes) => {
    const userData = {
      userName: values.email,
      password: values.password,
      firstName: values.name,
      lastName: values.lastName,
    };
    await dispatch(createUser(userData));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationForSignUpForm}
      onSubmit={sumbitSignUp}
    >
      { ({ handleSubmit, isValid, dirty }) => (
        <FormStyled onSubmit={handleSubmit}>
          <Title>
            <p>Sign Up</p>
          </Title>
          <InputName
            label="Name"
            name="name"
            type="text"
            placeholder="First Name"
            fontSize="0"
          />
          <InputName
            label="Surname"
            name="lastName"
            type="text"
            placeholder="Last Name"
            fontSize="0"
          />
          <InputEmail
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            fontSize="0"
          />
          <InputPassword
            label="Password"
            name="password"
            isEyeVisible
            placeholder="Password"
            fontSize="0"
          />
          <InputConfirmPassword
            label="Confirm Password"
            name="confirmPassword"
            isEyeVisible
            placeholder="Confirm Password"
            fontSize="0"
          />
          <Button isDisabled={!isValid || !dirty} type="submit">Sign Up</Button>
          <Footer footerText={messages.signUpFooterText} footerLink={SIGN_IN_PATH} footerLinkText="Sign In" />
        </FormStyled>
      )}
    </Formik>
  );
}
