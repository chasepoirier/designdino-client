import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

	render() {
		console.log(process.env.REACT_APP_API);
		return (
			<header>
		      <div className="nav-wrapper">
		        <div className="left">
		          <Link to="/" className="logo"></Link>
		          <a className="link" href="">memberships</a>
		          <a className="link" href="">about</a>
		        </div>
		        <Link to="/" className="logo-image"></Link>
		        <div className="right">
		          <Link to="/login" className="button outline">Sign In</Link>
		          <Link to="/register" className="button filled">Sign Up</Link>
		        </div>
		        
		      </div>
		    </header>
		);
	}
}	

export default NavBar;


/*<div class="right">
  <div class="profile-dropdown">
    <a class="dropdown-link">Profile</a>
    <a class="dropdown-link">Your Fossils</a>
    <a class="dropdown-link">Become a Member</a>
    <a class="dropdown-link">Sign Out</a>
  </div>
  <a href="#" class="dropdown-link">Sign Out</a>
  <a class="button filled wide">Add a Fossil</a>
  <a class="profile nav">
    <img src="../../assets/images/add-large.png" />
  </a>
</div>*/