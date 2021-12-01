import React from 'react';
import { Container } from '../../components';
import { SIGN_IN_PATH } from '../../routes';
import {
  FormStyles, TitleStyles, ArrowLink, TitleTextStyles, RestorePasswordText,
} from './RestoredPassword.styles';
import { MESSAGES } from '../../theme';

export function RestoredPassword() {
  return (
    <Container>
      <FormStyles>
        <TitleStyles>
          <ArrowLink to={SIGN_IN_PATH} />
          <TitleTextStyles>Restore Password</TitleTextStyles>
        </TitleStyles>
        <RestorePasswordText>
          <p>{MESSAGES.restoredPasswordText}</p>
        </RestorePasswordText>
      </FormStyles>
    </Container>
  );
}
