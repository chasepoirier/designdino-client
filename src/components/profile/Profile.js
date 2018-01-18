import React, { Component } from 'react';
import FossilPreview from '../fossil/FossilPreview'
import SearchBar from '../SearchBar'

import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/Profile';
import { changeUserAvatar } from '../../actions/User';

class Profile extends Component {

  state = {
    loading: false,
    isCurrentUser: false
  }

  componentWillMount() {
    this.props.getUserProfile(this.props.match.params.id)
    
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.props.match.params.id !== nextProps.match.params.id ) {
      this.props.getUserProfile(nextProps.match.params.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUser.username === nextProps.user.username) {
      this.setState({ isCurrentUser: true })
    }
  }

  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);

    this.props.changeUserAvatar(this.props.user.username, data).then(() => window.location.reload())
  }

  render() {
    const { name, email, avatar } = this.props.user;
    return (
      <div className="page-wrapper">
        <SearchBar />
        <div className="profile-container">
          
          <div className="img-container">
             {avatar !== undefined && <img src={`${process.env.REACT_APP_API}/uploads/${avatar}`} alt="" />}
             {this.state.isCurrentUser && 
                <form id="image">
                  <input type="file" accept="image/*" onChange={this.handleUploadFile} className="input" /> 
                </form>
              }
          </div>
          <div className="info-container">
            <div className="text bold"> {name} / <span className="green">{email}</span></div>
          </div>
          <div className="bio">A short bio of yourself goes here, just start typing</div>
          <div className="social-links">
            <a href=""><div className="icon twitter"></div></a>
            <a href=""><div className="icon fb"></div></a>
            <a href=""><div className="icon add"></div></a>
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

const mapStateToProps = state => {
  return {
    user: state.profile,
    currentUser: state.user
  }
}

export default connect(mapStateToProps, { getUserProfile, changeUserAvatar })(Profile);