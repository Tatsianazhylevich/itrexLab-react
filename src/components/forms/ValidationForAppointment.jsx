import * as Yup from 'yup';

export const validate = Yup.object({
  occupation: Yup.string()
    .required('Required'),
  doctorsName: Yup.string()
    .required('Required'),
  reason: Yup.string()
    .required('Required')
    .min(3, 'Must be at least 3 characters'),
  note: Yup.string()
    .max(100, 'Must be no more than 100 characters'),
  date: Yup.string()
    .required('Required'),
  time: Yup.string()
    .required('Required'),
});
