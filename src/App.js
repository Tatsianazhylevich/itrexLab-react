import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Provider>

  );
}

export default App;
