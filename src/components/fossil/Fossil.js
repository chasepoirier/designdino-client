import React, { Component } from 'react';


class Fossil extends Component {

  render() {
    return (
      <div className="page-wrapper">
      <form id="search">
        <input className="searchbar" type="text" placeholder="Search fossils" />
        <div className="bottom-bar"></div>
      </form>
      <div className="top-content">
            <div className="main-fossil">
              <img src="" />
            </div>
            <div className="side-info">
              <div className="fossil-title">Fossil Title</div>
              <div className="fossil-creator-container">
                <a href="#">
                  <div className="img-container">
                    <img src="#" />
                  </div>
                </a>
                <div className="info-container">
                  <div className="text bold">Chase Poirier / <span className="green">Add a company</span></div>
                </div>
              </div>
              <div className="fossil-stats">
                <div className="stats-container">
                  <div className="time-created">5 minutes ago</div>
                  <div className="download-number">1,456</div>
                  <div className="dino-claps">10000</div>
                </div>
              </div>
              <div className="fossil-tags-container">
                <div className="fossil-tag" >Tags</div>
              </div>
              <div className="download-cta">Download</div>
            </div>
          </div>
      <div className="about-fossil">About this Fossil
        <p>Fossil Description</p>
      </div>
      <div className="fossil-container individual">
            <div className="fossil">
              <div className="img-container">
                <img src="" />
              </div>
              
               <div className="content-bar">
                <div className="fossil-title">Download</div>
              </div>

            </div>
          </div>
    </div>
    );
  }
}

export default Fossil;