import * as Yup from 'yup';
import { errorMessages } from '../../../../shared';

export const ValidationForSignInForm = Yup.object({
  email: Yup.string()
    .email(errorMessages.email)
    .required(errorMessages.required),
  password: Yup.string()
    .min(4, errorMessages.passwordMin)
    .required(errorMessages.passwordMin),
});
