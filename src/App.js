import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';


function App() {
  return (

    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shop" component={ ShopPage } />
    </Switch>

  );
}

export default App;
