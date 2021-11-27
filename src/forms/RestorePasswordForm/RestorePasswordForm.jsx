import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { ValidationForRestorePassForm } from './ValidationForRestorePass';
import {
  StyledForm,
  StyledTitle,
  StyledTitleText,
  ArrowLink,
  RestorePasswordText,
  InputEmail,
  StyledButtonForRestored,
} from './RestorePasswordForm.styles';

import { SIGN_IN_PATH, RESTORED_PASSWORD_PATH } from '../../routes/routes';

export function RestorePasswordForm() {
  const { push } = useHistory();

  const handleClick = () => {
    push(RESTORED_PASSWORD_PATH);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ValidationForRestorePassForm}
        onSubmit={handleClick}
      >
        <StyledForm>
          <StyledTitle>
            <ArrowLink to={SIGN_IN_PATH} />
            <StyledTitleText>Restore Password</StyledTitleText>
          </StyledTitle>
          <RestorePasswordText>
            <p>Please use your email address, and we’ll send you the link to reset your password</p>
          </RestorePasswordText>
          <InputEmail
            label="Email"
            name="email"
            type="email"
            placeholder="bart@gmail.com"
            fontSize="0"
          />
          <StyledButtonForRestored type="submit">Send Reset Link</StyledButtonForRestored>
        </StyledForm>
      </Formik>
    </>
  );
}
