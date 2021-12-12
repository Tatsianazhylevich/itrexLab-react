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
import { SignInForm } from '..';
import * as loginUser from '../../../pages/Authorization/redux/authorization/authorization.slice';

describe('SignInForm', () => {
  const initialState = { login: { status: 'OK' } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  let emailInput;
  let passwordInput;
  let submitButton;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,

    );
    emailInput = screen.getByPlaceholderText('bart@gmail.com');
    passwordInput = screen.getByPlaceholderText(/password/i);
    submitButton = screen.getByRole('button');
  });

  it('inputs and button are render in the document', () => {
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should submit with correct values', async () => {
    const loginMock = jest.fn();
    jest.spyOn(loginUser, 'loginUser').mockImplementation((values) => loginMock(values));
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );

    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'test123456');
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith({
        userName: 'test@test.com',
        password: 'test123456',
      });
    });
  });
});
