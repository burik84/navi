// TODO: разобраться с локальной работой страницы без запуска сервера
// TODO: проблема в Route

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Map } from './pages/Map';
import { Asutp } from './pages/Asutp';
import { Info } from './pages/Info';
import { Scheme } from './pages/Scheme';
import { Uku } from './pages/Uku';
import { Kip } from './pages/Kip';
import { Search } from './pages/Search';

import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

import { ButtonUp } from './components/ButtonUp';

export function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
          <Route path="/scheme" component={Scheme} />
          <Route path="/uku" component={Uku} />
          <Route path="/kip" component={Kip} />
          <Route path="/asutp" component={Asutp} />
          <Route path="/info" component={Info} />
          <Route path="/search" component={Search} />
          <Route path="/main" component={Main} />
          <Route path="/" component={Main} />
          <Route path="*">Sorry, This page not found</Route>
        </Switch>
        <Aside />
        <Footer />
        <ButtonUp />
      </div>
    </div>
  );
}
