import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './routes';
import { store } from './store/store';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
