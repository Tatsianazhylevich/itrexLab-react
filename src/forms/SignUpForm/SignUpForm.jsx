import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Button, Title, Footer,
} from '../../components';
import {
  FormStyles, InputName, InputEmail, InputPassword, InputConfirmPassword,
} from './SignUpForm.styles';
import { ValidationForSignUpForm } from './ValidationForSignUpForm';
import { SIGN_IN_PATH, PATIENT_VIEW_PATH } from '../../routes/routes';
import { MESSAGES } from '../../utils';

export function SignUpForm() {
  const { push } = useHistory();

  const initialValues = {
    name: '',
    lastName: '',
    userName: '',
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
        <FormStyles>
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
            name="userName"
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
          <Footer footerText={MESSAGES.signUpFooterText} footerLink={SIGN_IN_PATH} footerLinkText="Sign In" />
        </FormStyles>
      )}
    </Formik>
  );
}
