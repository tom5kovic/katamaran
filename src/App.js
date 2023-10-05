import React from 'react';
import './reset.css';
import { GlobalRouter } from './router/GlobalRouter';
import { Footer } from './layout/Footer/Footer';

function App() {
  return (
    <>
      <GlobalRouter />
      <Footer />
    </>
  );
}

export default App;
