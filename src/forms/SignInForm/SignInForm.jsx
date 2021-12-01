import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Button, Title, Footer,
} from '../../components';
import { ValidationForSignInForm } from './ValidationForSignInForm';
import { SIGN_UP_PATH, RESTORE_PASSWORD_PATH, PATIENT_VIEW_PATH } from '../../routes/routes';
import { FormStyled, InputEmail, InputPassword } from './SignInForm.styles';
import { messages } from '../../shared';

export function SignInForm() {
  const { push } = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  function handleClick() {
    push(PATIENT_VIEW_PATH);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationForSignInForm}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        handleClick();
      }}
    >
      {() => (
        <FormStyled>
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
          <Button type="submit">Submit</Button>
          <Link to={RESTORE_PASSWORD_PATH}>Forgot password?</Link>
          <Footer footerText={messages.signInFooterText} footerLink={SIGN_UP_PATH} footerLinkText="Sign Up" />
        </FormStyled>
      )}
    </Formik>
  );
}
