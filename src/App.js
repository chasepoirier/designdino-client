import React, { Component } from 'react';
import Customers from './components/customers/customers'
import { Route, Switch, withRouter} from 'react-router-dom';

// React Components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Fossil from './components/fossil/Fossil';
import AddFossil from './components/addfossil/AddFossil';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import Login from './components/login/Login';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser } from './actions/User';

import './index.css';
import './components/home/loader.css';
import './assets/fonts/style.css';

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
          <Route path="/profiles/:id" render={() => <Profile user={this.props.user} />} />
          <Route path="/fossils/:id" component={Fossil} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user  
  }  
}

export default withRouter(connect(mapStateToProps)(App));
// export default App;
