import React, {Component} from 'react';

class NavBar extends Component {
	
	constructor() {
		super();
	}

	render() {
		return (
			<header>
		      <div class="nav-wrapper">
		        <div class="left">
		          <a class="logo"></a>
		          <a class="link" href="#">memberships</a>
		          <a class="link" href="#">about</a>
		        </div>
		        <a class="logo-image"></a>
		        <div class="right">
		          <a class="button outline">Sign In</a>
		          <a class="button filled">Sign Up</a>
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