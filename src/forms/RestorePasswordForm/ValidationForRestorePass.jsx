import * as Yup from 'yup';
import { errorMessages } from '../../shared';

export const ValidationForRestorePassForm = Yup.object({
  email: Yup.string()
    .email(errorMessages.email)
    .required(errorMessages.required),
});
