import React from 'react';
import {
  screen, render, waitFor, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SignUpForm } from '..';
import * as createUser from '../../../pages/Authorization/redux/authorization/authorization.slice';

describe('SignUpForm', () => {
  const initialState = { login: { status: 'Created' } };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let firstNameInput;
  let lastNameInput;
  let emailInput;
  let passwordInput;
  let confirmPasswordInput;
  let submitButton;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </Provider>,

    );
    firstNameInput = screen.getByPlaceholderText('First Name');
    lastNameInput = screen.getByPlaceholderText('Last Name');
    emailInput = screen.getByPlaceholderText('email@gmail.com');
    passwordInput = screen.getByPlaceholderText('Password');
    confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    submitButton = screen.getByRole('button');
  });

  it('inputs and button are render in the document', () => {
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should submit with correct values', async () => {
    const registrationMock = jest.fn();
    jest.spyOn(createUser, 'createUser').mockImplementation((values) => registrationMock(values));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </Provider>,
    );
    userEvent.type(firstNameInput, 'Test');
    userEvent.type(lastNameInput, 'Test');
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'test123456');
    userEvent.type(confirmPasswordInput, 'test123456');
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(registrationMock).toHaveBeenCalledWith({
        firstName: 'Test',
        lastName: 'Test',
        userName: 'test@test.com',
        password: 'test123456',
      });
    });
  });

  it('should not submit with uncorrect values', async () => {
    const registrationMock = jest.fn();
    jest.spyOn(createUser, 'createUser').mockImplementation((values) => registrationMock(values));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </Provider>,
    );
    userEvent.type(firstNameInput, 'Test');
    userEvent.type(lastNameInput, '');
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'test123456');
    userEvent.type(confirmPasswordInput, 'test12346');
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(registrationMock).not.toHaveBeenCalled();
    });
  });
});
