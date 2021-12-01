import * as Yup from 'yup';
import { ERRORMESSAGES } from '../../utils';

export const validate = Yup.object({
  occupation: Yup.string()
    .required(ERRORMESSAGES.required),
  doctorsName: Yup.string()
    .required(ERRORMESSAGES.required),
  reason: Yup.string()
    .required(ERRORMESSAGES.required)
    .min(3, ERRORMESSAGES.min),
  note: Yup.string()
    .max(100, ERRORMESSAGES.max),
  date: Yup.string()
    .required(ERRORMESSAGES.required),
  time: Yup.string()
    .required(ERRORMESSAGES.required),
});
