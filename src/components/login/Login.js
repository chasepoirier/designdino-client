import React, { Component } from 'react';


class Login extends Component {

  render() {
    return (
      <div className="page-wrapper">
        <h1>Welcome Back.</h1>
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

export default Login;