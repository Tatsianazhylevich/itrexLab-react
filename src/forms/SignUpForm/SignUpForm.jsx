import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Button, Title, Footer,
} from '../../components';
import {
  StyledForm, InputName, InputEmail, InputPassword, InputConfirmPassword,
} from './SignUpForm.styles';
import { ValidationForSignUpForm } from './ValidationForSignUpForm';
import { SIGN_IN_PATH, PATIENT_VIEW_PATH } from '../../routes/routes';

export function SignUpForm() {
  const { push } = useHistory();

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  function handleClick() {
    push(PATIENT_VIEW_PATH);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationForSignUpForm}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        handleClick();
      }}
    >
      { () => (
        <StyledForm>
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
          <Button type="submit">Sign Up</Button>
          <Footer footerText="Dont have an account?" footerLink={SIGN_IN_PATH} footerLinkText="Sign In" />
        </StyledForm>
      )}
    </Formik>
  );
}
