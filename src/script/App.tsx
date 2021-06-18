import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

import { ButtonUp } from './components/ButtonUp';

export function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Aside />
          <Footer />
        </BrowserRouter>
        <ButtonUp />
      </div>
    </div>
  );
}
