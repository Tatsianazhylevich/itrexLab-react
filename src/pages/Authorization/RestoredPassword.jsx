import React from 'react';
import { Container } from '../../components';
import { SIGN_IN_PATH } from '../../routes';
import {
  StyledForm, StyledTitle, ArrowLink, StyledTitleText, RestorePasswordText,
} from './RestoredPassword.styles';

export function RestoredPassword() {
  return (
    <Container>
      <StyledForm>
        <StyledTitle>
          <ArrowLink to={SIGN_IN_PATH} />
          <StyledTitleText>Restore Password</StyledTitleText>
        </StyledTitle>
        <RestorePasswordText>
          <p>
            An email has been sent to example@exam.com.
            Check your inbox, and click the reset link provided.

          </p>
        </RestorePasswordText>
      </StyledForm>
    </Container>
  );
}
