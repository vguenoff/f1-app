import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Drivers from './Drivers';
import Driver from './Driver';
import Constructors from './Constructors';
import Circuits from './Circuits';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Nav />
      <div className="content">
        <Route exact path="/" component={Drivers} />
        <Route exact path="/driverDetail/:driverId" component={Driver} />
        <Route path="/constructors" component={Constructors} />
        <Route path="/circuits" component={Circuits} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
