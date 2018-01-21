import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const FossilPreview = ({ fossil }) => (
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
              <div className="dino-claps stats">10000</div>
            </div>
          </div>
          </Link>
          <Link to={`/users/${fossil.author.username}`}>
          <div className="container">
              <div className="img-container">
                <img src={`${process.env.REACT_APP_AWS_URL}/${fossil.author.avatar}`} alt=""/>
              </div>
              <div className="creator">{fossil.author.name}</div>
            </div>
          </Link>
        </div>
);

export default FossilPreview