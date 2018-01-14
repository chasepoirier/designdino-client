import React, { Component } from 'react';

class FossilPreview extends Component {

  render() {
    return (
        <div className="fossil">
          <a href="">
          <div className="img-container">
            <img src="" alt="" />
            <div className="hover-state">
              <div className="text white">Inspect Fossil</div>
            </div>
          </div>
          
            <div className="content-bar">
            <div className="fossil-title">Fossil Title</div>
            
            <div className="stats-container">
              <div className="time-created">5 Minutes ago</div>
              <div className="dino-claps stats">10000</div>
            </div>
          </div>

          <div className="container">
              <div className="img-container">
                <img src="" alt=""/>
              </div>
              <div className="creator">Chase Poirier</div>
            </div>
          </a>
        </div>
    );
  }
}

export default FossilPreview;