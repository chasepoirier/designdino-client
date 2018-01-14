import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/User';


class Login extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired
  // };

  componentWillMount() {
    this.props.dispatch(fetchUser());
    // const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
  }

  render() {
    return (
      <div className="page-wrapper">
        <h1>Welcome Back, {this.props.user.name}.</h1>
        <div className="tagline">Time to get digging for designs and finding fossils</div>
        <form id="signup">
          <input className="input" type="text" placeholder="username" name="username" />
          <input className="input" type="password" placeholder="password" name="password" />
          <input type="submit" value="Login" className="input-button" />
        </form>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
      user: {
        name: state.user.name
      }
  }
}

export default connect(mapStateToProps)(Login);
