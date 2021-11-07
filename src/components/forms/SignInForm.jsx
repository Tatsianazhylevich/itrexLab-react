import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Button, Input, Title } from '../UI';
import { Footer } from '../UI/Footer';
import { SIGN_UP_PATH, SIGN_IN_PATH, RESTORE_PASSWORD_PATH } from '../routes';
import emailIcon from '../../assets/icons/Vector.png';
import passwordIcon from '../../assets/icons/lock.png';

export function SignInForm() {
  const history = useHistory();

  function handleClick() {
    history.push(SIGN_UP_PATH);
  }

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(4, 'Must be at least 4 characters.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            handleClick();
          }, 400);
        }}
      >

        <StyledForm>
          <Title>
            <p>Sign In</p>
          </Title>
          <InputEmail
            name="email"
            type="email"
            placeholder="bart@gmail.com"
          />
          <InputPassword
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Submit</Button>
          <Link to={RESTORE_PASSWORD_PATH}>Forgot password?</Link>
          <Footer link={SIGN_IN_PATH} />
        </StyledForm>
      </Formik>
    </>
  );
}

const StyledForm = styled(Form)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 560px;
    min-height: 100vh;
    padding: 0 95px;
    background-color: #F9FAFF;
`;

const InputEmail = styled(Input)`
    background: url(${emailIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
`;
const InputPassword = styled(Input)`
    position: relative;
    background: url(${passwordIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
`;
