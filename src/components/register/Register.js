import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createNewUser } from '../../actions/User';
import { withRouter } from 'react-router-dom';

class Register extends Component {

  handleNewUser = (e) => {
    
  
    let user = {
      name: this.refs.name.value,
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    // console.log(user);

    e.preventDefault()
    this.props.createNewUser(user);
    this.props.history.push(`/profiles/${user.username}`)
  }

  render() {
    return (
     <div className="page-wrapper">
        <h1>Welcome to DesignDino{this.props.user.name !== null ? `, ${this.props.user.name}` : null}.</h1>
        <div className="tagline">Time to get digging for designs and finding fossils</div>
        <div className="social-login">
          <div className="text">sign up with a connected account or email</div>
          <div className="social-wrapper">
            {/*<a href="/" className="icon twitter"></a>*/}
            {/*<a href="/" className="icon fb"></a>*/}
            {/*<a href="/" className="icon google"></a>*/}
          </div>
        </div>
        <form id="signup">
          <input className="input" ref="name" type="text" placeholder="Your Name" name="name" />
          <input className="input" ref="username" type="text" placeholder="username" name="username" />
          <input className="input" ref="email" type="text" placeholder="email" name="email" />
          <input className="input" ref="password" type="password" placeholder="password"  name="password" />
          <input type="submit" onClick={this.handleNewUser} value="Sign Up" className="input-button" />
        </form>
      </div>


    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const connectWrapper = connect(mapStateToProps, { createNewUser })(Register);

export default withRouter(connectWrapper);