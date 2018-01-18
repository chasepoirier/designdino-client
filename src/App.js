import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';

// React Components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Fossil from './components/fossil/Fossil';
import AddFossil from './components/addfossil/AddFossil';
import Profile from './components/profile/Profile';
import Register from './components/register/Register';
import Login from './components/login/Login';

// Routes
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

// redux
import { connect } from 'react-redux';
import { fetchCurrentUser } from "./actions/User";

import './index.css';
import './components/home/loader.css';
import './assets/fonts/style.css';

class App extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) this.props.fetchCurrentUser();

  }

  render() {
    const { location, isAuthenticated, loaded } = this.props;
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <GuestRoute location={location} path="/register" component={Register} />
          <GuestRoute location={location} path="/login" component={Login} />
          <Route path="/add-fossil" component={AddFossil} />
          <UserRoute path="/users/:id" component={Profile} />
          <Route path="/fossils/:id" component={Fossil} />
        </Switch>
      </div>
    );
  }
}

// export default withRouter(connect(mapStateToProps)(App));
// export default App;

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded
  };
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);
