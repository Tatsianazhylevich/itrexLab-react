import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Formik, Field,
} from 'formik';
import { doctors, timeList } from '../../mocks';
import { WarningTextStyled } from '../../components';
import {
  CalendarStyled, RadioInput, CustomSelect, SectionHeader,
} from '../../modules';
import { validate } from './ValidationForAppointment';
import { PATIENT_VIEW_PATH } from '../../routes/routes';
import { messages } from '../../shared';
import {
  SectionWrapper,
  AppointmentsFormStyled,
  ButtonSubmitStyled,
  ButtonWrapperStyled,
  FieldsStyled,
  LabelStyled,
  RadioWrapperStyled,
  SectionContainerStyled,
  WarningsStyled,
  WarningsTimeStyled,
  WrapperStyled,
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
        <SectionContainerStyled>
          <AppointmentsFormStyled>
            <WrapperStyled>
              <SectionWrapper>
                <SectionHeader sectionNumber="1" sectionText={messages.firstSectionText} />
                <InputWrapper>
                  <LabelStyled>Occupation</LabelStyled>
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
                    ? <WarningsStyled>{errors.occupation}</WarningsStyled>
                    : null}
                </InputWrapper>

                <InputWrapper>
                  <LabelStyled>Doctors Name</LabelStyled>
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
                    ? <WarningsStyled>{errors.doctorsName}</WarningsStyled>
                    : null}
                </InputWrapper>

                <InputWrapper>
                  <LabelStyled>Reason for the visit</LabelStyled>
                  <FieldsStyled type="text" name="reason" placeholder="Reason" />
                  {errors.reason && touched.reason
                    ? <WarningTextStyled>{errors.reason}</WarningTextStyled>
                    : null}
                </InputWrapper>
                <InputWrapper>
                  <LabelStyled>Note</LabelStyled>
                  <FieldsStyled type="text" name="note" placeholder="Leave a note if needed" />
                  {errors.note && touched.note
                    ? <WarningsStyled>{errors.note}</WarningsStyled>
                    : null}
                </InputWrapper>
              </SectionWrapper>

              <SectionWrapper>
                <SectionHeader sectionNumber="2" sectionText={messages.secondSectionText} />
                <Field name="date" id="date" component={CalendarStyled} onChange={setCalendarValue} value={calendarValue} />
              </SectionWrapper>

              <SectionWrapper>
                <SectionHeader sectionNumber="3" sectionText={messages.thirdSectionText} />
                <RadioWrapperStyled>
                  {errors.time && touched.time
                    ? <WarningsTimeStyled>{errors.time}</WarningsTimeStyled>
                    : null}
                  {timeList.map((time) => (
                    <Field name="time" id={time} component={RadioInput} timeValue={time} selectedTime={values.time} key={time} />
                  ))}
                </RadioWrapperStyled>
              </SectionWrapper>
            </WrapperStyled>
            <ButtonWrapperStyled>
              <ButtonSubmitStyled isDisabled={!isValid || !dirty} type="submit">Submit</ButtonSubmitStyled>
            </ButtonWrapperStyled>
          </AppointmentsFormStyled>
        </SectionContainerStyled>

      )}
    </Formik>
  );
}
