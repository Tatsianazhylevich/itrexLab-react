import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Formik, Form, Field,
} from 'formik';
import styled from 'styled-components';
import { doctors, timeList } from '../../mocks';
import { Button, SectionHeader, StyledWarningText } from '../UI';
import { StyledCalendar, RadioInput, MySelect } from '../../pages/Appointments/components';
import { validate } from './ValidationForAppointment';
import { PATIENT_VIEW_PATH } from '../routes';

export function SelectDoctorForm() {
  const history = useHistory();
  const [doctorsPosition, setDoctorsPosition] = useState('');
  const [doctorsName, setDoctorsName] = useState('');
  const [calendarValue, onChange] = useState(new Date());
  const occupations = doctors.reduce((acc, { position }) => {
    if (!acc.includes(position)) {
      return [...acc, position];
    }
    return acc;
  }, [])
    .map((occupation) => ({
      label: occupation,
      value: occupation,
    }));

  const getFilteredDoctorsByOccupation = (occupation) => {
    if (occupation) {
      return doctors
        .filter(({ position }) => position === occupation)
        .map(({ firstName, lastName }) => ({
          label: `${firstName} ${lastName}`,
          value: `${firstName} ${lastName}`,
        }));
    }
    return doctors.map(({ firstName, lastName }) => ({
      label: `${firstName} ${lastName}`,
      value: `${firstName} ${lastName}`,
    }));
  };

  function handleClick() {
    history.push(PATIENT_VIEW_PATH);
  }

  return (
    <Formik
      initialValues={{
        occupation: '',
        doctorsName: '',
        reason: '',
        note: '',
        date: calendarValue,
        time: '',
      }}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
          handleClick();
        }, 400);
      }}
    >
      {({
        values, errors, touched, setFieldValue,
      }) => (
        <StyledAppointmentsForm>
          <StyledWrapper>
            <SectionWrapper>
              <SectionHeader number="1" text="Select a doctor and define the reason of your visit" />
              <InputWrapper>
                <StyledLabel>Occupation</StyledLabel>
                <Field
                  component={MySelect}
                  name="occupation"
                  id="occupation"
                  options={occupations}
                  onChange={(value) => {
                    setDoctorsPosition(value);
                    setFieldValue('occupation', value.value);
                  }}
                  value={doctorsPosition}
                />
                {errors.occupation && touched.occupation
                  ? <StyledWarnings>{errors.occupation}</StyledWarnings>
                  : null}
              </InputWrapper>

              <InputWrapper>
                <StyledLabel>Doctors Name</StyledLabel>
                <Field
                  component={MySelect}
                  name="doctorsName"
                  id="doctorsName"
                  options={getFilteredDoctorsByOccupation(values.occupation)}
                  onChange={(value) => {
                    setDoctorsName(value);
                    setFieldValue('doctorsName', value.value);
                  }}
                  value={doctorsName}
                />
                {errors.doctorsName && touched.doctorsName
                  ? <StyledWarnings>{errors.doctorsName}</StyledWarnings>
                  : null}
              </InputWrapper>

              <InputWrapper>
                <StyledLabel>Reason for the visit</StyledLabel>
                <StyledFields type="text" name="reason" placeholder="Reason" />
                {errors.reason && touched.reason
                  ? <StyledWarningText>{errors.reason}</StyledWarningText>
                  : null}
              </InputWrapper>
              <InputWrapper>
                <StyledLabel>Note</StyledLabel>
                <StyledFields type="text" name="note" placeholder="Leave a note if needed" />
                {errors.note && touched.note
                  ? <StyledWarnings>{errors.note}</StyledWarnings>
                  : null}
              </InputWrapper>
            </SectionWrapper>

            <SectionWrapper>
              <SectionHeader number="2" text="Choose a day for an appointment" />
              <Field name="date" id="date" component={StyledCalendar} onChange={onChange} value={calendarValue} />
            </SectionWrapper>

            <SectionWrapper>
              <SectionHeader number="3" text="Select an available timeslot" />
              <StyledRadioWrapper>
                {errors.time && touched.time
                  ? <StyledWarningsTime>{errors.time}</StyledWarningsTime>
                  : null}
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
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledAppointmentsForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const StyledRadioWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 464px;
`;

const StyledFields = styled(Field)`
    position: relative;
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

const StyledLabel = styled.label`
  margin-bottom: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: black;  
`;

const StyledWarnings = styled(StyledWarningText)`
  bottom: 14px;
`;
const StyledWarningsTime = styled(StyledWarningText)`
  bottom: -17px;
  left: 23px;
`;
