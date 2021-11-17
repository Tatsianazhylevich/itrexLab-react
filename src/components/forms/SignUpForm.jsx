import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import {
  Button, Input, Title,
} from '../UI';
import { Footer } from '../UI/Footer';
import { SIGN_UP_PATH, DOCTOR_VIEW_PATH } from '../routes';
import nameIcon from '../../assets/icons/user.png';
import emailIcon from '../../assets/icons/Vector.png';
import passwordIcon from '../../assets/icons/lock.png';
import confirmIcon from '../../assets/icons/check.png';

export function SignUpForm() {
  const history = useHistory();

  function handleClick() {
    history.push(DOCTOR_VIEW_PATH);
  }

  const validate = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters.')
      .required('Required'),
    lastName: Yup.string()
      .min(3, 'Must be at least 3 characters.')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(4, 'Must be at least 4 characters.')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
          handleClick();
        }, 400);
      }}
    >
      { () => (
        <StyledForm>
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
            name="email"
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
          <Button type="submit">Submit</Button>
          <Footer link={SIGN_UP_PATH} />
        </StyledForm>
      )}
    </Formik>
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
    @media (max-width: 600px) {
      justify-content: flex-start;
        align-items: stretch;
        margin-top: 72px;
        width: 100%;
        padding: 0 5.5vh;
        border-radius: 24px 24px 0px 0px;
    }
`;

const InputName = styled(Input)`
    background: url(${nameIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
    @media (max-width: 600px) {
      background: url(${nameIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: #FFFFFF;
    }

`;
const InputEmail = styled(Input)`
    background: url(${emailIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
    @media (max-width: 600px) {
      background: url(${emailIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: #FFFFFF;
    }
`;
const InputPassword = styled(Input)`
    position: relative;
    background: url(${passwordIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
    @media (max-width: 600px) {
      background: url(${passwordIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: #FFFFFF;
    }
`;

const InputConfirmPassword = styled(Input)`
    position: relative;
    background: url(${confirmIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
    @media (max-width: 600px) {
      background: url(${confirmIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: #FFFFFF;
    }
`;
