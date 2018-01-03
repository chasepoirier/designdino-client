import React, { Component } from 'react';
import FossilPreview from '../fossil/FossilPreview'
import SearchBar from '../SearchBar'


class Profile extends Component {

  render() {
    return (
      <div className="page-wrapper">
        <SearchBar />

        <div className="profile-container">
          <div className="img-container">
            <img src="../../../assets/images/add-large.png" />
          </div>
          <div className="info-container">
        
            <div className="text bold">Chase Poirier / <span className="green">Chase.n.poirier@gmail.com</span></div>
          </div>
          <div className="bio">A short bio of yourself goes here, just start typing</div>
          <div className="social-links">
            <a className="icon twitter"></a>
            <a className="icon fb"></a>
            <a className="icon add"></a>
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

export default Profile;