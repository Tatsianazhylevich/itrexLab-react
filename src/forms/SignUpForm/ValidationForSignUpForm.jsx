import * as Yup from 'yup';

export const ValidationForSignUpForm = Yup.object({
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
