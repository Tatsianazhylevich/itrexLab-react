import * as Yup from 'yup';
import { errorMessages } from '../../../../shared';

export const validate = Yup.object({
  occupation: Yup.string()
    .required(errorMessages.required),
  doctorsName: Yup.string()
    .required(errorMessages.required),
  reason: Yup.string()
    .required(errorMessages.required)
    .min(3, errorMessages.min),
  note: Yup.string()
    .max(100, errorMessages.max),
  date: Yup.string()
    .required(errorMessages.required),
  time: Yup.string()
    .required(errorMessages.required),
});
