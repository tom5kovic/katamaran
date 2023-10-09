import React from 'react';
import './reset.css';
import { Provider } from 'react-redux';
import { GlobalRouter } from './router/GlobalRouter';
import { Footer } from './layout/Footer/Footer';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalRouter />
      <Footer />
    </Provider>
  );
}

export default App;
