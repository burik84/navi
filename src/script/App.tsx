import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getData as getDataJSON } from './services/fetchDataJSON';

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
  const [source, getSource] = useState([]);
  const [isLoadingSource, setLoadingSOurce] = useState(true);

  useEffect(() => {
    getData();
  }),
    [];
  const getData = async () => {
    await getDataJSON()
      .then((res) => {
        // console.log(res);
        setLoadingSOurce(false);
      })
      .catch((error) => {
        console.log('Something went wrong', error.message);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
          <Route path="/scheme/:section" component={Scheme} />
          <Route path="/scheme/" component={Scheme} />
          <Route path="/uku/:section" component={Uku} />
          <Route path="/uku" component={Uku} />
          <Route path="/kip/:section" component={Kip} />
          <Route path="/kip" component={Kip} />
          <Route path="/asutp/:section" component={Asutp} />
          <Route path="/asutp" component={Asutp} />
          <Route path="/info/:section" component={Info} />
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
