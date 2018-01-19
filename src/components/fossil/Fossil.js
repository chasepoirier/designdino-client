import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFossil } from '../../actions/Fossil';
import moment from 'moment';

class Fossil extends Component {

  componentWillMount() {
    this.props.fetchFossil(this.props.match.params.id)
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.props.match.params.id !== nextProps.match.params.id ) {
      this.props.fetchFossil(nextProps.match.params.id)
    }
  }

  render() {

    const { headerImage, author, title, desc, createdAt, loaded, tags } = this.props.fossil;
    let tagsToDiv;
    
    if(loaded) {
      tagsToDiv= tags.map(tag => {
        return <div key={tag} className="fossil-tag">{tag}</div>
      })
    }
    
    return (
      
      <div className="page-wrapper">
      <form id="search">
        <input className="searchbar" type="text" placeholder="Search fossils" />
        <div className="bottom-bar"></div>
      </form>

      {loaded ? 
        <span>
      <div className="top-content">
            <div className="main-fossil">
              <img src={`${process.env.REACT_APP_AWS_URL}/${headerImage}`} alt=""/>
            </div>
            <div className="side-info">
              <div className="fossil-title">{title}</div>
              <div className="fossil-creator-container">
                <a href="">
                  <div className="img-container">
                    <img src={`${process.env.REACT_APP_AWS_URL}/${author.avatar}`} alt="" />
                  </div>
                </a>
                <div className="info-container">
                  <div className="text bold">{author.name} / <span className="green">{author.email}</span></div>
                </div>
              </div>
              <div className="fossil-stats">
                <div className="stats-container">
                  <div className="time-created">{moment(createdAt).startOf(createdAt).fromNow()}</div>
                  <div className="download-number">1,456</div>
                  <div className="dino-claps">10000</div>
                </div>
              </div>
              <div className="fossil-tags-container">
                {tagsToDiv}
              </div>
              <div className="download-cta">Download</div>
            </div>
          </div>
      <div className="about-fossil">About this Fossil
        <p>{desc}</p>
      </div>
      
          </span>
          : null }
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fossil: state.fossil
  }
}

export default connect(mapStateToProps, { fetchFossil })(Fossil);



// dowloads

/*
    <div className="fossil-container individual">
      <div className="fossil">
        <div className="img-container">
          <img src="" alt=""/>
        </div>
        
         <div className="content-bar">
          <div className="fossil-title">Download</div>
        </div>

      </div>
    </div>
*/