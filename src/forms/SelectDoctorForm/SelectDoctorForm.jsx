import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Formik, Field,
} from 'formik';
import { WarningTextStyled } from '../../components';
import {
  CalendarStyled, RadioInput, CustomSelect, SectionHeader,
} from '../../modules';
import { validate } from './ValidationForAppointment';
import { PATIENT_VIEW_PATH } from '../../routes/routes';
import { messages } from '../../shared';
import {
  getSpecializations,
  allSpecializations,
  allDoctorsBySpecializationsID,
  getDoctorsBySpecializations,
  freeTimeForVisit,
  getFreeTime,
  createNewAppointment,
} from '../../pages/Appointments/redux';
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
  const dispatch = useDispatch();

  const allOccupations = useSelector(allSpecializations)
    .map((occupation) => ({ value: occupation.id, label: occupation.specialization_name }));
  console.log(allOccupations);

  const doctorsByOccupation = useSelector(allDoctorsBySpecializationsID).map((doctor) => ({
    value: doctor.id, label: `${doctor.first_name} ${doctor.last_name}`,
  }));

  const timeForVisit = useSelector(freeTimeForVisit).map((item) => ({ label: format(new Date(item), 'h:mm aaa'), value: item }));
  console.log(timeForVisit);

  useEffect(() => {
    dispatch(getSpecializations());
  }, []);

  const createAppointment = (values) => {
    const valuesForAppointment = {
      date: values.date,
      reason: values.reason,
      note: values.note,
      doctorID: values.doctorsName,
    };
    console.log(valuesForAppointment);
    dispatch(createNewAppointment(valuesForAppointment));
    push(PATIENT_VIEW_PATH);
  };

  const initialValue = {
    occupation: '',
    doctorsName: '',
    reason: '',
    note: '',
    date: new Date(),
    time: '',
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        createAppointment(values);
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
                    options={allOccupations}
                    onChange={(value) => {
                      setFieldValue('occupation', value.label);
                      dispatch(getDoctorsBySpecializations(value.value));
                    }}
                    handleReset={setFieldValue}
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
                    options={doctorsByOccupation}
                    onChange={(value) => {
                      console.log(value);
                      setFieldValue('doctorsName', value.value);
                    }}
                    handleReset={setFieldValue}
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
                <Field
                  name="date"
                  id="date"
                  component={CalendarStyled}
                  onChange={(value) => {
                    const dateFormat = value.toISOString();
                    setFieldValue('date', dateFormat);
                    dispatch(getFreeTime({ date: dateFormat, doctorId: values.doctorsName }));
                  }}
                  handleReset={setFieldValue}
                />
              </SectionWrapper>

              <SectionWrapper>
                <SectionHeader sectionNumber="3" sectionText={messages.thirdSectionText} />
                <RadioWrapperStyled>
                  {errors.time && touched.time
                    ? <WarningsTimeStyled>{errors.time}</WarningsTimeStyled>
                    : null}
                  {timeForVisit.map((time) => (
                    <Field name="time" component={RadioInput} timeValue={time.label} selectedTime={values.time} key={time.value} />
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
