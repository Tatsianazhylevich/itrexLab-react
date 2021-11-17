import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { doctors, timeList } from '../../mocks';
import { Button, SectionHeader, StyledWarningText } from '../UI';
import { StyledCalendar, RadioInput } from '../../pages/Appointments/components';

export function SelectDoctorForm() {
  const validate = Yup.object({
    occupation: Yup.string()
      .required('Required'),
    doctorsName: Yup.string()
      .required('Required')
      .min(3, 'Must be at least 3 characters.'),
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

  return (
    <Formik
      initialValues={{
        occupation: '',
        doctorsName: '',
        reason: '',
        note: '',
        date: '',
        time: '',
      }}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values, errors, touched, handleSubmit,
      }) => (
        <StyledAppointmentsForm onSubmit={handleSubmit}>
          <StyledWrapper>
            <SectionWrapper>
              <SectionHeader number="1" text="Select a doctor and define the reason of your visit" />
              <InputWrapper>
                <label>Occupation</label>
                <StyledFields
                  as="select"
                  name="occupation"
                >
                  <option value="therapist">Therapist</option>
                  <option value="surgeon">Surgeon</option>
                  <option value="oculist">Oculist</option>
                </StyledFields>
                {errors.occupation && touched.occupation
                  ? <StyledWarningText message={errors.occupation} />
                  : null}
              </InputWrapper>

              <InputWrapper>
                <label>Doctors Name</label>
                <StyledFields
                  as="select"
                  name="doctorsName"
                >
                  {doctors.map((doctor) => (
                    <option value={doctor.lastName} key={doctor.id}>{`${doctor.firstName} ${doctor.lastName}`}</option>
                  ))}
                </StyledFields>
                {errors.doctorsName && touched.doctorsName
                  ? <StyledWarningText message={errors.doctorsName} />
                  : null}
              </InputWrapper>

              <InputWrapper>
                <label>Reason for the visit</label>
                <StyledFields type="text" name="reason" placeholder="Reason" />
                {errors.reason && touched.reason
                  ? <StyledWarningText message={errors.reason} />
                  : null}
              </InputWrapper>
              <InputWrapper>
                <label>Note</label>
                <StyledFields type="text" name="note" placeholder="Leave a note if needed" />
                {errors.note && touched.note
                  ? <StyledWarningText message={errors.note} />
                  : null}
              </InputWrapper>
            </SectionWrapper>

            <SectionWrapper>
              <SectionHeader number="2" text="Choose a day for an appointment" />
              <Field name="date" id="date" component={StyledCalendar} />
            </SectionWrapper>

            <SectionWrapper>
              <SectionHeader number="3" text="Select an available timeslot" />
              <StyledRadioWrapper>
                {timeList.map((time) => (
                  <Field name="time" id={time} component={RadioInput} timeValue={time} selectedTime={values.time} key={time} />
                ))}
              </StyledRadioWrapper>
            </SectionWrapper>
          </StyledWrapper>

          <Button type="submit">Submit</Button>
        </StyledAppointmentsForm>
      )}
    </Formik>
  );
}

const StyledWrapper = styled.div`
  display:flex;
  flex-direction: raw;
  justify-content: space-between;
`;

const StyledAppointmentsForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledRadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 464px;
`;

const StyledFields = styled(Field)`
    width: 624px;
    height: 56px;
    margin: 0 0 20px 0;
    padding: 0 24px;
    font-size: 17px;
    line-height: 24px;
    border: 1px solid #DCE0EC;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    &:focus {
        border: 1px solid #7297FF;
    }
`;
