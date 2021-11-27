import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Formik, Field,
} from 'formik';
import { doctors, timeList } from '../../mocks';
import { StyledWarningText } from '../../components';
import {
  StyledCalendar, RadioInput, CustomSelect, SectionHeader,
} from '../../modules';
import { validate } from './ValidationForAppointment';
import { PATIENT_VIEW_PATH } from '../../routes/routes';
import {
  SectionWrapper,
  StyledAppointmentsForm,
  StyledButtonSubmit,
  StyledButtonWrapper,
  StyledFields,
  StyledLabel,
  StyledRadioWrapper,
  StyledSectionContainer,
  StyledWarnings,
  StyledWarningsTime,
  StyledWrapper,
  InputWrapper,
} from './SelectDoctorForm.styles';

export function SelectDoctorForm() {
  const { push } = useHistory();
  const [doctorsPosition, setDoctorsPosition] = useState('');
  const [doctorsName, setDoctorsName] = useState('');
  const [calendarValue, setCalendarValue] = useState(new Date());

  const initialValue = {
    occupation: '',
    doctorsName: '',
    reason: '',
    note: '',
    date: calendarValue,
    time: '',
  };

  const occupations = doctors
    .filter(({ position }) => [...position])
    .map(({ position }) => ({ label: position, value: position }));

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
    push(PATIENT_VIEW_PATH);
  }

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleClick();
      }}
    >
      {({
        values, errors, touched, setFieldValue, isValid, dirty,
      }) => (
        <StyledSectionContainer>
          <StyledAppointmentsForm>
            <StyledWrapper>
              <SectionWrapper>
                <SectionHeader number="1" text="Select a doctor and define the reason of your visit" />
                <InputWrapper>
                  <StyledLabel>Occupation</StyledLabel>
                  <Field
                    component={CustomSelect}
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
                    component={CustomSelect}
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
                <Field name="date" id="date" component={StyledCalendar} onChange={setCalendarValue} value={calendarValue} />
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
            <StyledButtonWrapper>
              <StyledButtonSubmit isDisabled={!isValid || !dirty} type="submit">Submit</StyledButtonSubmit>
            </StyledButtonWrapper>
          </StyledAppointmentsForm>
        </StyledSectionContainer>

      )}
    </Formik>
  );
}
