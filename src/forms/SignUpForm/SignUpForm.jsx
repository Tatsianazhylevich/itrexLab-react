import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  Button, Title, Footer,
} from '../../components';
import {
  FormStyled, InputName, InputEmail, InputPassword, InputConfirmPassword,
} from './SignUpForm.styles';
import { createUser, userProfile } from '../../pages/Authorization/redux';
import { ValidationForSignUpForm } from './ValidationForSignUpForm';
import { SIGN_IN_PATH, PATIENT_VIEW_PATH } from '../../routes/routes';
import { messages } from '../../shared';

export function SignUpForm() {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const sumbitSignUn = (values) => {
    const userData = {
      userName: values.email,
      password: values.password,
      firstName: values.name,
      lastName: values.lastName,
    };
    console.log(userData);
    dispatch(createUser(userData));
    dispatch(userProfile());
    push(SIGN_IN_PATH);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationForSignUpForm}
      onSubmit={sumbitSignUn}
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
            placeholder="email@gmail.com"
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
