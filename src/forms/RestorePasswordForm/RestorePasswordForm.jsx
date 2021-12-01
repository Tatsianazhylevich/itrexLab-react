import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { ValidationForRestorePassForm } from './ValidationForRestorePass';
import {
  FormStyles,
  TitleStyles,
  TitleTextStyles,
  ArrowLink,
  RestorePasswordText,
  InputEmail,
  ButtonForRestoredStyles,
} from './RestorePasswordForm.styles';

import { SIGN_IN_PATH, RESTORED_PASSWORD_PATH } from '../../routes/routes';
import { MESSAGES } from '../../utils';

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
        <FormStyles>
          <TitleStyles>
            <ArrowLink to={SIGN_IN_PATH} />
            <TitleTextStyles>Restore Password</TitleTextStyles>
          </TitleStyles>
          <RestorePasswordText>
            <p>{MESSAGES.restorePasswordText}</p>
          </RestorePasswordText>
          <InputEmail
            label="Email"
            name="email"
            type="email"
            placeholder="bart@gmail.com"
            fontSize="0"
          />
          <ButtonForRestoredStyles type="submit">Send Reset Link</ButtonForRestoredStyles>
        </FormStyles>
      </Formik>
    </>
  );
}
