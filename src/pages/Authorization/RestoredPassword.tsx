import { Container } from 'components';
import { SIGN_IN_PATH } from 'routes';
import {
  FormStyled, TitleStyled, ArrowLink, TitleTextStyled, RestorePasswordText,
} from './RestoredPassword.styles';
import { messages } from '../../shared';

export function RestoredPassword() {
  return (
    <Container>
      <FormStyled>
        <TitleStyled>
          <ArrowLink to={SIGN_IN_PATH} />
          <TitleTextStyled>Restore Password</TitleTextStyled>
        </TitleStyled>
        <RestorePasswordText>
          <p>{messages.restoredPasswordText}</p>
        </RestorePasswordText>
      </FormStyled>
    </Container>
  );
}
