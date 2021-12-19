import * as Yup from 'yup';
import { errorMessages } from '../../../../shared';

export const ValidationForSignUpForm = Yup.object({
  name: Yup.string()
    .min(3, errorMessages.min)
    .required(errorMessages.required),
  lastName: Yup.string()
    .min(3, errorMessages.min)
    .required(errorMessages.required),
  email: Yup.string()
    .email(errorMessages.email)
    .required(errorMessages.required),
  password: Yup.string()
    .min(4, errorMessages.passwordMin)
    .required(errorMessages.required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], errorMessages.passwordMatched)
    .required(errorMessages.required),
});
