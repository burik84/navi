import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './layout/Header';

export function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    </div>
  );
}
