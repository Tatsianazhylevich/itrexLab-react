import * as Yup from 'yup';
import { ERRORMESSAGES } from '../../theme';

export const ValidationForRestorePassForm = Yup.object({
  email: Yup.string()
    .email(ERRORMESSAGES.email)
    .required(ERRORMESSAGES.required),
});
