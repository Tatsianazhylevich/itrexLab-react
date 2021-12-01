import * as Yup from 'yup';
import { ERRORMESSAGES } from '../../utils';

export const ValidationForSignUpForm = Yup.object({
  name: Yup.string()
    .min(3, ERRORMESSAGES.min)
    .required(ERRORMESSAGES.required),
  lastName: Yup.string()
    .min(3, ERRORMESSAGES.min)
    .required(ERRORMESSAGES.required),
  email: Yup.string()
    .email(ERRORMESSAGES.email)
    .required(ERRORMESSAGES.required),
  password: Yup.string()
    .min(4, ERRORMESSAGES.passwordMin)
    .required(ERRORMESSAGES.required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], ERRORMESSAGES.passwordMatched)
    .required(ERRORMESSAGES.required),
});
