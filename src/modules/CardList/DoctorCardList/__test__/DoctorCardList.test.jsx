import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { DoctorCardList } from '..';

const appointmentList = [
  {
    id: '9feb6e70-584f-11ec-b181-e9c4c4e9adc3',
    visit_date: '2021-12-10T06:00:00.000Z',
    reason: 'headache',
    note: 'pain in the left side of the head',
    patient_id: 'da258190-573f-11ec-8adc-53d17f5c1fdf',
    doctor_id: '2d81c370-4d64-11ec-a5ef-8f4983ead485',
    status: 'waiting',
    doctor: {
      first_name: 'Mary',
      last_name: 'Smith',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '2d81c370-4d64-11ec-a5ef-8f4983ead485',
      specialization_name: 'therapist',
    },
  },
  {
    id: 'cef62ab0-5850-11ec-b181-e9c4c4e9adc3',
    visit_date: '2021-12-10T08:00:00.000Z',
    reason: 'eyeache',
    note: 'cutting pain in the left eye',
    patient_id: 'da258190-573f-11ec-8adc-53d17f5c1fdf',
    doctor_id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
    status: 'waiting',
    doctor: {
      first_name: 'Gregory',
      last_name: 'House',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
      specialization_name: 'ophthalmologist',
    },
  },
  {
    id: '982639c0-5851-11ec-b181-e9c4c4e9adc3',
    visit_date: '2021-12-10T10:00:00.000Z',
    reason: 'Abdominal pain',
    note: 'Drawing pain in the lower abdomen',
    patient_id: 'da258190-573f-11ec-8adc-53d17f5c1fdf',
    doctor_id: '90dbfd50-5043-11ec-b7df-f1784d8070ff',
    status: 'waiting',
    doctor: {
      first_name: 'Charles',
      last_name: 'Bukowski',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '90dbfd50-5043-11ec-b7df-f1784d8070ff',
      specialization_name: 'surgeon',
    },
  },
];

describe('Doctor List', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should render nothing if not appointments', () => {
    const initialState = {
      patientAppointments: { appointments: [] },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DoctorCardList />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.queryByTestId('doctorCard')).not.toBeInTheDocument();
    expect(screen.getByText('no doctors')).toBeInTheDocument();
  });

  it('should render appointmentsList', () => {
    const initialState = {
      patientAppointments: { appointments: { appointments: appointmentList } },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DoctorCardList />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getAllByTestId(/doctorcard/i)).toHaveLength(3);
    expect(screen.getByText(/therapist/i)).toBeInTheDocument();
    expect(screen.getByText(/smith/i)).toBeInTheDocument();
    expect(screen.getByText(/surgeon/i)).toBeInTheDocument();
    expect(screen.getByText(/bukowski/i)).toBeInTheDocument();
  });
});
