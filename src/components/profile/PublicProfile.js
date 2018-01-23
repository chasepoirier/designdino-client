import React from 'react';

const PublicProfile = ({ user }) => (
	 <div className="profile-container">
      <div className="img-container">
         {user.avatar !== undefined && <img src={`${process.env.REACT_APP_AWS_URL}/${user.avatar}`} alt="" />}
      </div>
      <div className="info-container">
        <div className="text bold"> {user.name} / <span className="green">{user.title}</span></div>
      </div>
      <div className="bio">{user.bio}</div>
      <div className="social-links">
        <a href=""><div className="icon twitter"></div></a>
        <a href=""><div className="icon fb"></div></a>
        <a href=""><div className="icon add"></div></a>
      </div>
    </div>
);

export default PublicProfile;