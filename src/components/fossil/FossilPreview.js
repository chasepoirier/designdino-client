import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FossilPreview extends Component {
  
  componentWillMount() {
    let title = this.props.fossil.title;

    if(title.length > 20) {
      this.props.fossil.title = title.substring(0,18) + "..."
    }
  }

  render() {
    const { fossil } = this.props
    return (
      <div className="fossil">
        <Link to={`/fossils/${fossil.url}`}>
        <div className="img-container">
          <img src={`${process.env.REACT_APP_AWS_URL}/${fossil.headerImage}`} alt="" />
          <div className="hover-state">
            <div className="text white">Inspect Fossil</div>
          </div>
        </div>
        
          <div className="content-bar">
          <div className="fossil-title">{fossil.title}</div>
          
          <div className="stats-container">
            <div className="time-created">{moment(fossil.createdAt).startOf(fossil.createdAt).fromNow()}</div>
            <div className="dino-claps stats">{fossil.dinoClaps}</div>
          </div>
        </div>
        </Link>

        {!this.props.onProfile && 
        <Link to={`/users/${fossil.author.username}`}>
        <div className="container">
            <div className="img-container">
              <img src={`${process.env.REACT_APP_AWS_URL}/${fossil.author.avatar}`} alt=""/>
            </div>
            <div className="creator">{fossil.author.name}</div>
          </div>
        </Link>
        }
      </div>
    );
  }
}

export default FossilPreview;