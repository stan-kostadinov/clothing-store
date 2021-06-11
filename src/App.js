import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser: null
  }
}

unsubscribeFromAuth = null;

componentDidMount () {
  auth.onAuthStateChanged( async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);


      userRef.onSnapshot( snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        })
      });
      
    } else {
      this.setState({currentUser: userAuth});
    }
  } )
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}


  render (){
    return (
      <div>
    <Header />
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shop" component={ ShopPage } />
      <Route path="/signin" component={ SignInAndSignUpPage } />
    </Switch>
    </div>
    )
  }
}

export default App;
