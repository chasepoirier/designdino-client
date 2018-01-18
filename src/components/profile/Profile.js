import React, { Component } from 'react';
import FossilPreview from '../fossil/FossilPreview'
import SearchBar from '../SearchBar'

import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/Profile'

class Profile extends Component {

  componentWillMount() {
    this.props.getUserProfile(this.props.match.params.id)
  }

  render() {
    const { name, username, email } = this.props.user;

    return (

      <div className="page-wrapper">
        <SearchBar />
        <div className="profile-container">
          <div className="img-container">
            <img src="../../../assets/images/add-large.png" alt="" />
          </div>
          <div className="info-container">
            <div className="text bold"> {name} / <span className="green">{email}</span></div>
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

const mapStateToProps = state => {
  return {
    user: state.profile
  }
}

export default connect(mapStateToProps, { getUserProfile })(Profile);