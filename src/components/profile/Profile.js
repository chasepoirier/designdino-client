import React, { Component } from 'react';
import FossilPreview from '../fossil/FossilPreview'
import SearchBar from '../SearchBar'

import { fetchUser } from '../../actions/User';
import { connect } from 'react-redux';

class Profile extends Component {

  componentWillMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    
    if (this.props.user.isFetching === true) {
      return (<div className="loader"></div>)
    } else {
    return (
      <div className="page-wrapper">
        <SearchBar />
        <div className="profile-container">
          <div className="img-container">
            <img src="../../../assets/images/add-large.png" alt="" />
          </div>
          <div className="info-container">
        
            <div className="text bold">{this.props.user.name} / <span className="green">{this.props.user.email}</span></div>
          </div>
          <div className="bio">A short bio of yourself goes here, just start typing</div>
          <div className="social-links">

            <a href=""><div className="icon twitter"></div></a>
            <a href=""><div className="icon fb"></div></a>
            <a href=""><div className="icon add"></div></a>
          </div>
        </div>
        <div className="fossil-container profile">
          <FossilPreview />
          <FossilPreview />
          <FossilPreview />
        </div>
      </div>
    );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);