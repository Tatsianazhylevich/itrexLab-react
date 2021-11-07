import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Button, Input, Title } from '../UI';
import { Footer } from '../UI/Footer';
import { SIGN_UP_PATH, SIGN_IN_PATH } from '../routes';
import nameIcon from '../../assets/icons/user.png';
import emailIcon from '../../assets/icons/Vector.png';
import passwordIcon from '../../assets/icons/lock.png';
import confirmIcon from '../../assets/icons/check.png';

export function SignUpForm() {
  const history = useHistory();

  function handleClick() {
    history.push(SIGN_IN_PATH);
  }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 characters.')
            .required('Required'),
          lastName: Yup.string()
            .min(3, 'Must be at least 3 characters.')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(4, 'Must be at least 4 characters.'),
          confirmPassword: Yup.string()
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
            <p>Sign Up</p>
          </Title>
          <InputName
            name="name"
            type="text"
            placeholder="Bart"
          />
          <InputName
            name="surname"
            type="text"
            placeholder="Simpson"
          />
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
          <InputConfirmPassword
            name="confirm"
            type="password"
            placeholder="Confirm Password"
          />
          <Button type="submit">Submit</Button>
          <Footer link={SIGN_UP_PATH} />
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

const InputName = styled(Input)`
    background: url(${nameIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
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
const InputConfirmPassword = styled(Input)`
    position: relative;
    background: url(${confirmIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
`;
