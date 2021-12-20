import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../shared'
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { SingleValue } from 'react-select';
import {
  Formik, Field,
} from 'formik';
import { WarningTextStyled } from '../../../../components';
import {
  CalendarStyled, RadioInput, CustomSelect, SectionHeader,
} from '../../../../modules';
import { validate } from './ValidationForAppointment';
import { PATIENT_VIEW_PATH } from '../../../../routes/routes';
import { messages } from '../../../../shared';
import {
  getSpecializations,
  allSpecializations,
  allDoctorsBySpecializationsID,
  getDoctorsBySpecializations,
  freeTimeForVisit,
  getFreeTime,
  createNewAppointment,
  newAppointment,
} from '../../redux';
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
import { OptionType } from '../../../types'

export interface SelectDoctorFormTypes {
  date: string,
  time: string,
  occupation: {},
  doctorsName: string,
  reason: string,
  note: string,
}

export function SelectDoctorForm() {
  const { push } = useHistory();
  const dispatch = useAppDispatch();

  const allOccupations = useAppSelector(allSpecializations)
    .map((occupation) => ({ value: occupation.id, label: occupation.specialization_name }));

  const doctorsByOccupation = useAppSelector(allDoctorsBySpecializationsID).map((doctor) => ({
    value: doctor.id, label: `${doctor.first_name} ${doctor.last_name}`,
  }));

  const timeForVisit = useAppSelector(freeTimeForVisit).map((item) => ({ label: format(new Date(item), 'h:mm aaa'), value: item }));

  const isNewAppointment = useAppSelector(newAppointment);

  const getDateFormat = (value: any) => new Date(value.getTime()
 - (value.getTimezoneOffset() * 60000)).toISOString();

  useEffect(() => {
    dispatch(getSpecializations());
  }, []);

  const initialValue = {
    occupation: {},
    doctorsName: '',
    reason: '',
    note: '',
    date: '',
    time: '',
  };

  const createAppointment = ({reason, note, doctorsName, time}: SelectDoctorFormTypes) => {
    const formatTimetoISO = new Date(time).toISOString();
    const valuesForAppointment = {
      date: formatTimetoISO,
      reason: reason,
      note: note,
      doctorID: doctorsName,
    };
    dispatch(createNewAppointment(valuesForAppointment));
    if (isNewAppointment) {
      push(PATIENT_VIEW_PATH);
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
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
                    value={values.occupation}
                    onChange={(value: SingleValue<string | OptionType>): void => {
                      if (typeof value === 'string') {
                        setFieldValue('occupation', value);
                        dispatch(getDoctorsBySpecializations(value));
                      } else if (value) {
                        setFieldValue('occupation', value.label);
                        dispatch(getDoctorsBySpecializations(value.value));
                      }
                    }}
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
                    
                    onChange={(value: { value: string, label: string }) => {
                      setFieldValue('doctorsName', value.value);
                    }}
                    value={values.doctorsName}
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
                  onChange={(value: OptionType) => {
                    const dateFormat = getDateFormat(value);
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
                    <Field name="time" component={RadioInput} timeValue={time.label} selectedTime={values.time} stateValue={time.value} key={time.value} />
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
