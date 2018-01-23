import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/Auth';
import './navbar.css';


class NavBar extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			clicked: false
		}

		this.bound_toggleDropdown = this.toggleDropdown.bind(this)
	}

	componentWillMount() {
		document.addEventListener('click', this.bound_toggleDropdown);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
			this.setState({ clicked: false })
		}
	}

	toggleDropdown = e => {
		let target = e.target.parentNode.classList.contains('profile', 'button')

		if(target && !this.state.clicked) {
			this.setState({ clicked: true })
		} else if(this.state.clicked) {
			this.setState({ clicked: false })
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
					<div className="profile button"><img src={`${process.env.REACT_APP_AWS_URL}/${avatar}`} alt=""/></div>
					<div className={this.state.clicked ? 'profile-dropdown clicked' : 'profile-dropdown'}>
						<Link to={`/users/${username}`} className="dropdown-link">Profile</Link>
						<Link to={`/memberships`} className="dropdown-link">Memberships</Link>	
						<Link to={`/login`} onClick={logout} className="dropdown-link">Sign Out</Link>	
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