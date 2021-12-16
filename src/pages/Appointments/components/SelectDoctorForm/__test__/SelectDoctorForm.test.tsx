import React from 'react';
import {
  screen, render,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SelectDoctorForm } from '..';

describe('SelectDoctorForm', () => {
  const initialState = {
    newAppointment: {
      status: '',
      specializations: [
        {
          id: 'c43fca01-3ea9-48f5-b5d8-4d7a4705e30f',
          specialization_name: 'surgeon',
        },
        {
          id: '902240b7-514a-48c3-a67f-6acfb1d35030',
          specialization_name: 'therapist',
        }],

      doctors: [
        {
          first_name: 'Mary',
          last_name: 'Smith',
          id: '2d81c370-4d64-11ec-a5ef-8f4983ead485',
        }],
      time: [
        '2021-12-14T07:00:00.000Z',
      ],
      newAppointment: {},
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  jest.spyOn(store, 'dispatch').mockImplementation(() => {});

  let reasonInput;
  let noteInput;
  let doctorIDSelectInput;
  let specializationSelectInput;
  let submitButton;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SelectDoctorForm />
        </BrowserRouter>
      </Provider>,

    );
    specializationSelectInput = screen.getByText('Occupation');
    doctorIDSelectInput = screen.getByText('Doctors Name');
    reasonInput = screen.getByText('Reason for the visit');
    noteInput = screen.getByText('Note');
    submitButton = screen.getByText(/submit/i);
  });

  it('inputs and button are render in the document', () => {
    expect(specializationSelectInput).toBeInTheDocument();
    expect(doctorIDSelectInput).toBeInTheDocument();
    expect(reasonInput).toBeInTheDocument();
    expect(noteInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
