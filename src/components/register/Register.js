import React, { Component } from 'react';


class Register extends Component {

  render() {
    return (
     <div className="page-wrapper">
        <h1>Welcome to DesignDino.</h1>
        <div className="tagline">Time to get digging for designs and finding fossils</div>
        <div className="social-login">
          <div className="text">sign up with a connected account or email</div>
          <div className="social-wrapper">
            <a href="#" className="icon twitter"></a>
            <a href="#" className="icon fb"></a>
            <a href="#" className="icon google"></a>
          </div>
        </div>
        <form id="signup">
          <input className="input" type="text" placeholder="Your Name" name="name" />
          <input className="input" type="text" placeholder="username" name="username" />
          <input className="input" type="text" placeholder="email" name="email" />
          <input className="input" type="password" placeholder="password"  name="password" />
          <input type="submit" value="Sign Up" className="input-button" />
        </form>
      </div>


    );
  }
}

export default Register;