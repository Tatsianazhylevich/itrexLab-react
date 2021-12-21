import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { ValidationForRestorePassForm } from './ValidationForRestorePass';
import {
  FormStyled,
  TitleStyled,
  TitleTextStyled,
  ArrowLink,
  RestorePasswordText,
  InputEmail,
  ButtonForRestoredStyled,
} from './RestorePasswordForm.styles';
import { SIGN_IN_PATH, RESTORED_PASSWORD_PATH } from 'routes/routes';
import { messages } from 'shared';

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
        <FormStyled>
          <TitleStyled>
            <ArrowLink to={SIGN_IN_PATH} />
            <TitleTextStyled>Restore Password</TitleTextStyled>
          </TitleStyled>
          <RestorePasswordText>
            <p>{messages.restorePasswordText}</p>
          </RestorePasswordText>
          <InputEmail
            label="Email"
            name="email"
            type="email"
            placeholder="bart@gmail.com"
            fontSize="0"
          />
          <ButtonForRestoredStyled type="submit">Send Reset Link</ButtonForRestoredStyled>
        </FormStyled>
      </Formik>
    </>
  );
}
