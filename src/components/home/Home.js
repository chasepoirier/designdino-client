import React, { Component } from 'react';


class Home extends Component {

  render() {
    return (
      <div class="page-wrapper">
      <form id="search">
        <input type="text" class="searchbar" name="search" placeholder="search" />
        <div class="bottom-bar"></div>
      </form>
      <div class="hero-section">
        <div class="content">
          <h1>Welcome to DesignDino.</h1>
          <div class="tagline">An open source design platform based on dinosaurs</div>
          <div class="description">Discover, connect and download fossils to advance your skillsets and contrbute to community discussions.</div>
        </div>
      </div>

      <div class="fossil-container">
        <div class="fossil">
          <a href="#">
          <div class="img-container">
            <img src="" />
            <div class="hover-state">
              <div class="text white">Inspect Fossil</div>
            </div>
          </div>
          
            <div class="content-bar">
            <div class="fossil-title">Fossil Title</div>
            
            <div class="stats-container">
              <div class="time-created">5 Minutes ago</div>
              <div class="dino-claps stats">10000</div>
            </div>
          </div>

          <div class="container">
              <div class="img-container">
                <img src="" />
              </div>
              <div class="creator">Chase Poirier</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;