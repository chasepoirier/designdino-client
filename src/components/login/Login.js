import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from "../../actions/Auth";
import { withRouter } from 'react-router-dom';

import Validator from "validator";
class Login extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  submit = data => {
    return this.props.login(data)
      .then(res => {
        
        this.props.history.push(`/users/${res}`)
    });
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

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

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="page-wrapper">
        <h1>Welcome Back.</h1>
        <div className="tagline">Time to get digging for designs and finding fossils</div>
        <form id="signup" onSubmit={this.onSubmit}>

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
          {errors.global && <div className="error">{errors.global}</div>}

          <input onChange={this.onChange} type="submit" value="Login In" className="input-button" />
        </form>
      </div>

    );
  }
}

const connectWrapper = connect(null, { login })(Login);

export default withRouter(connectWrapper);
