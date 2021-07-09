// TODO: разобраться с локальной работой страницы без запуска сервера
// TODO: проблема в Route

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Map } from './pages/Map';
import { Asutp } from './pages/Asutp';
import { Info } from './pages/Info';
import { Scheme } from './pages/Scheme';
import { Uku } from './pages/Uku';
import { Kip } from './pages/Kip';
import { Search } from './pages/Search';

// import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

import { ButtonUp } from './components/ButtonUp';
import { Menu } from './components/Menu';

export function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/main" />
            <Route path="/main" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/map" component={Map} />
            <Route path="/scheme" component={Scheme} />
            <Route path="/uku" component={Uku} />
            <Route path="/kip" component={Kip} />
            <Route path="/asutp" component={Asutp} />
            <Route path="/info" component={Info} />
            <Route path="/search" component={Search} />
            <Route path="*">Sorry, This page not found</Route>
          </Switch>
          <Menu />
          <Aside />
          <Footer />
        </BrowserRouter>
        <ButtonUp />
      </div>
    </div>
  );
}
