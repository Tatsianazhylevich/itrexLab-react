import * as Yup from 'yup';

export const ValidationForSignInForm = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Must be at least 4 characters.')
    .required('Password is required'),
});
