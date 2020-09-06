import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Resume from './pages/Resume';
import Home from './pages/Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <Resume />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
