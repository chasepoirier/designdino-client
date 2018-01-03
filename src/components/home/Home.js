import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import FossilPreview from '../fossil/FossilPreview'

class Home extends Component {

  render() {
    return (
      <div className="page-wrapper">
      <SearchBar />

      <div className="hero-section">
        <div className="content">
          <h1>Welcome to DesignDino.</h1>
          <div className="tagline">An open source design platform based on dinosaurs</div>
          <div className="description">Discover, connect and download fossils to advance your skillsets and contrbute to community discussions.</div>
        </div>
      </div>

      <div className="fossil-container">
        <FossilPreview />
        <FossilPreview />
        <FossilPreview />
      </div>
    </div>
    );
  }
}

export default Home;