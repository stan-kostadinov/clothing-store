import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (

    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/hats" component={ HatsPage } />
    </Switch>

  );
}

export default App;
