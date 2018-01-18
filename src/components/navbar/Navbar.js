import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/Auth';

class NavBar extends Component {

	render() {
		const { isAuthenticated, username, logout } = this.props;
		
		return (
			<header>
		      <div className="nav-wrapper">
		        <div className="left">
		          <Link to="/" className="logo"></Link>
		          <a className="link" href="">memberships</a>
		          <a className="link" href="">about</a>
		        </div>
		        <Link to="/" className="logo-image"></Link>

	        	{isAuthenticated ? 
	        	<div className="right">
					<Link to={`/users/${username}`} onClick={logout} className="button outline">Sign Out</Link>	        	
					<Link to={`/users/${username}`} className="button filled">Profile</Link>
				</div>
	        	:
	        	<div className="right">
	        		<Link to="/login" className="button outline">Sign In</Link>
	        		<Link to="/register" className="button filled">Sign Up</Link>
	        	</div>
	        	}
		        
		      </div>
		    </header>
		);
	}
}	

const mapStateToProps = state => {
	return {
		isAuthenticated: !!state.user.email,
		username: state.user.username
	}
}

export default connect(mapStateToProps, { logout })(NavBar);