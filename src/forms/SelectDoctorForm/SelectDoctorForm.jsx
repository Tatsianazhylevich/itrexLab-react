import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Formik, Field,
} from 'formik';
import { doctors, timeList } from '../../mocks';
import { WarningTextStyles } from '../../components';
import {
  CalendarStyles, RadioInput, CustomSelect, SectionHeader,
} from '../../modules';
import { validate } from './ValidationForAppointment';
import { PATIENT_VIEW_PATH } from '../../routes/routes';
import { MESSAGES } from '../../theme';
import {
  SectionWrapper,
  AppointmentsFormStyles,
  ButtonSubmitStyles,
  ButtonWrapperStyles,
  FieldsStyles,
  LabelStyles,
  RadioWrapperStyles,
  SectionContainerStyles,
  WarningsStyles,
  WarningsTimeStyles,
  WrapperStyles,
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
        <SectionContainerStyles>
          <AppointmentsFormStyles>
            <WrapperStyles>
              <SectionWrapper>
                <SectionHeader sectionNumber="1" sectionText={MESSAGES.firstSectionText} />
                <InputWrapper>
                  <LabelStyles>Occupation</LabelStyles>
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
                    ? <WarningsStyles>{errors.occupation}</WarningsStyles>
                    : null}
                </InputWrapper>

                <InputWrapper>
                  <LabelStyles>Doctors Name</LabelStyles>
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
                    ? <WarningsStyles>{errors.doctorsName}</WarningsStyles>
                    : null}
                </InputWrapper>

                <InputWrapper>
                  <LabelStyles>Reason for the visit</LabelStyles>
                  <FieldsStyles type="text" name="reason" placeholder="Reason" />
                  {errors.reason && touched.reason
                    ? <WarningTextStyles>{errors.reason}</WarningTextStyles>
                    : null}
                </InputWrapper>
                <InputWrapper>
                  <LabelStyles>Note</LabelStyles>
                  <FieldsStyles type="text" name="note" placeholder="Leave a note if needed" />
                  {errors.note && touched.note
                    ? <WarningsStyles>{errors.note}</WarningsStyles>
                    : null}
                </InputWrapper>
              </SectionWrapper>

              <SectionWrapper>
                <SectionHeader sectionNumber="2" sectionText={MESSAGES.secondSectionText} />
                <Field name="date" id="date" component={CalendarStyles} onChange={setCalendarValue} value={calendarValue} />
              </SectionWrapper>

              <SectionWrapper>
                <SectionHeader SectioNumber="3" secionText={MESSAGES.thirdSectionText} />
                <RadioWrapperStyles>
                  {errors.time && touched.time
                    ? <WarningsTimeStyles>{errors.time}</WarningsTimeStyles>
                    : null}
                  {timeList.map((time) => (
                    <Field name="time" id={time} component={RadioInput} timeValue={time} selectedTime={values.time} key={time} />
                  ))}
                </RadioWrapperStyles>
              </SectionWrapper>
            </WrapperStyles>
            <ButtonWrapperStyles>
              <ButtonSubmitStyles isDisabled={!isValid || !dirty} type="submit">Submit</ButtonSubmitStyles>
            </ButtonWrapperStyles>
          </AppointmentsFormStyles>
        </SectionContainerStyles>

      )}
    </Formik>
  );
}
