import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { PatientCardList } from '..';

const patientList = [
  {
    id: '83403360-55bf-11ec-aa23-1b5cbb5ad57d',
    visit_date: '2021-12-07T21:00:00.000Z',
    reason: 'headache',
    note: 'headache',
    status: 'waiting',
    patient: {
      first_name: 'Tatsiana',
      last_name: 'Zhilevich',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '79696420-55be-11ec-aa23-1b5cbb5ad57d',
    },
  },
  {
    id: '2a328bf0-5b5b-11ec-83ad-671076b7e9dc',
    visit_date: '2021-12-14T08:00:00.000Z',
    reason: 'wearstyutres',
    note: 'qwertyutrsa',
    status: 'waiting',
    patient: {
      first_name: 'Harry',
      last_name: 'Potter',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '03360b10-5072-11ec-b7df-f1784d8070ff',
    },
  },
  {
    id: '8b9cfd50-4ddf-11ec-8ff7-0793810ddc12',
    visit_date: '2021-11-26T15:00:00.000Z',
    reason: 'ss',
    note: '',
    status: 'waiting',
    patient: {
      first_name: 'Leonid',
      last_name: 'Myc',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '6b3131a0-4ddd-11ec-8ff7-0793810ddc12',
    },
  },
];

describe('Patient List', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should provide "no doctors" if there are no appointments', () => {
    const initialState = {
      doctorAppointments: { patients: { } },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PatientCardList />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('no doctors')).toBeInTheDocument();
  });

  it('should render patientList', () => {
    const initialState = {
      doctorAppointments: { patients: { appointments: patientList } },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PatientCardList />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getAllByTestId(/patientcard/i)).toHaveLength(3);
    expect(screen.getByText(/potter/i)).toBeInTheDocument();
    expect(screen.getByText(/headache/i)).toBeInTheDocument();
    expect(screen.getByText(/zhilevich/i)).toBeInTheDocument();
  });
});
