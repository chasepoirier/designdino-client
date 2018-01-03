import React, { Component } from 'react';


class AddFossil extends Component {

  render() {
    return (
      <span>
      <div id="progress-bar"></div>

      <div className="page-wrapper">
        <form id="search">
          <input className="searchbar" type="text" placeholder="Search fossils" />
          <div className="bottom-bar"></div>
        </form>
        <div className="top-content">
          <form id="addFossil" className="main-fossil add">
            <input id="mainFossil" type="file" accept="image/*" name="file" className="input" />
            <img id="blah" onError="this.src='./assets/images/placeholder-header-img.png';" src="" />
          </form>
          <form id="sideContent" enctype="multipart/form-data" className="side-info">
            <textarea className="fossil-title" type="text" rows="2" name="fossilName" placeholder="Give your fossil a title"></textarea>
            <div className="fossil-creator-container">
              <div className="img-container">
                <img src="" />
              </div>
              <div className="info=container">
                <div className="text bold">Chase Poirier / <span className="green">chase.n.poirier@gmail.com</span></div>
              </div>
            </div>
            <div className="field top">
              <div className="title counter">Tags <span className="count"> 0 of 5 </span></div>
              <input type="text" name="tagContainer" placeholder="UI Design" />
              <span className="enter">Press Enter</span>
              <div className="fossil-tags-container">
                <div id="tag" className="fossil-tag add">TAG</div>
              </div>
            </div>
            <div className="download-cta" id="submitAddFossil">Create Fossil</div>
          </form>
        </div>
        <div className="about-fossil">About the File
          <form id="about" >
            <textarea name="about" placeholder="Write something awesome" rows="5"></textarea>
          </form>
        </div>
        <div className="source-fossils">
          <div className="about-fossil">Add Source Fossils</div>
          <form id="sourceFossil"  enctype="multipart/form-data"  className="add">
            <input  id="sources" className="input" type="file" name="file" multiple  />
            <div className="source">
              <img id="source1" src="" />
            </div>
          </form>
        </div>
      </div>
      </span>
    );
  }
}

export default AddFossil;