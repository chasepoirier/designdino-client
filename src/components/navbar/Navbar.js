import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/Auth';
import './navbar.css';


class NavBar extends Component {
	
	state = {
		clicked: false
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
			this.setState({ clicked: false })
		}
	}

	toggleDropdown = () => {
		if(this.state.clicked) {
			this.setState({ clicked: false })
		} else {
			this.setState({ clicked: true })
		}
	}

	render() {
		const { isAuthenticated, username, logout, avatar } = this.props;
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
					<Link to={`/add-fossil`} className="button filled add">Add Fossil</Link>
					<div onClick={this.toggleDropdown} className="profile button"><img src={`${process.env.REACT_APP_AWS_URL}/${avatar}`} alt=""/></div>
					<div className={this.state.clicked ? 'profile-dropdown clicked' : 'profile-dropdown'}>
						<Link onClick={this.toggleDropdown} to={`/users/${username}`} className="dropdown-link">Profile</Link>
						<Link onClick={this.toggleDropdown} to={`/memberships`} className="dropdown-link">Memberships</Link>	
						<Link onClick={this.toggleDropdown} to={`/login`} onClick={logout} className="dropdown-link">Sign Out</Link>	
					</div>
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
		username: state.user.username,
		avatar: state.user.avatar
	}
}

export default connect(mapStateToProps, { logout })(NavBar);