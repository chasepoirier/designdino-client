import React, { Component } from 'react';
import Customers from './components/customers/customers'
import { Route, Switch} from 'react-router-dom';

// React Components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Fossil from './components/fossil/Fossil';
import AddFossil from './components/addfossil/AddFossil';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import Login from './components/login/Login';

import './index.css';
import './assets/fonts/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/add-fossil" component={AddFossil} />
          <Route path="/profiles/:id" component={Profile} />
          <Route path="/fossils/:id" component={Fossil} />
        </Switch>
      </div>
    );
  }
}

export default App;
