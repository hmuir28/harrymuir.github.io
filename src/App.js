import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/resume/AboutMe';
import Landing from './components/Landing';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
