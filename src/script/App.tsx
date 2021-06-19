import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Map } from './pages/Map';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

import { ButtonUp } from './components/ButtonUp';
import { Menu } from './components/Menu';
import { Search } from './components/Search';

export function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Search />
          <main className="main">
            <div className="container">
              <Menu />
              <Main />
              <About />
              <Map />
              <Aside />
            </div>
          </main>
          <Footer />
        </BrowserRouter>
        <ButtonUp />
      </div>
    </div>
  );
}
