import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import isEmail from "validator/lib/isEmail";
import { signup } from "../../actions/User";


class Register extends Component {
  state = {
    data: {
      name: "",
      email: "",
      username: "",
      password: ""
    },
    errors: {}
  };

  submit = data => {
    return this.props.signup(data)
      .then(res => {
        this.props.history.push(`/users/${res.username}`)  
    });
  };

  onChange = e => {
    const errors = this.validateCurrent({ [e.target.name]: e.target.value });
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }, errors
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validateCurrent = data => {
    const errors = {  }
    if(data.email) {
        if (!isEmail(data.email)) errors.email = "Invalid email";  
    }
    return errors
  };

  validate = data => {
    const errors = {};
    if (!data.name) errors.name = "Can't be blank";
    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    if (!data.username) errors.username = "Can't be blank";
    return errors;
  };

  render() {
    const { errors } = this.state;
    return (
     <div className="page-wrapper">
        <h1>Welcome to DesignDino{this.props.user.name !== undefined ? `, ${this.props.user.name}` : null}.</h1>
        <div className="tagline">Time to get digging for designs and finding fossils</div>
        <form id="signup" onSubmit={this.onSubmit}>

          <input 
            onChange={this.onChange} 
            className={errors.name ? "input input-error" : "input"} 
            type="text" 
            placeholder="Your Full Name" 
            name="name" />
          {errors.name && <div className="error">{errors.name}</div>}

          <input 
            onChange={this.onChange} 
            className={errors.username ? "input input-error" : "input"} 
            type="text" 
            placeholder="Unique Username" 
            name="username" />
          {errors.username && <div className="error">{errors.username}</div>}

          <input 
            onChange={this.onChange} 
            className={errors.email ? "input input-error" : "input"}
            type="text" 
            placeholder="Email" 
            name="email" />
          {errors.email && <div className="error">{errors.email}</div>}

          <input 
            onChange={this.onChange} 
            className={errors.password ? "input input-error" : "input"}
            type="password" 
            placeholder="Password"  
            name="password" />
          {errors.password && <div className="error">{errors.password}</div>}

          <input onChange={this.onChange} type="submit" value="Sign Up" className="input-button" />
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

const connectWrapper = connect(mapStateToProps, { signup })(Register);

export default withRouter(connectWrapper);




// SIGN UP WITH SM ACCOUNT
/*
<div className="social-login">
  <div className="text">sign up with a connected account or email</div>
  <div className="social-wrapper">
    <a href="/" className="icon twitter"></a>
    <a href="/" className="icon fb"></a>
    <a href="/" className="icon google"></a>
  </div>
</div>
*/