import React, { Component } from 'react';
import FossilPreview from '../fossil/FossilPreview';
import SearchBar from '../SearchBar';

import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/Profile';
import { changeUserAvatar } from '../../actions/User';
import { fetchUserFossils } from '../../actions/Fossil';

class Profile extends Component {


  state = {
    fetched: false,
    isCurrentUser: false
  }

  componentWillMount() {
    this.props.getUserProfile(this.props.match.params.id).then(() => {
      this.props.fetchUserFossils(this.props.user._id).then(() => {
        this.setState({ fetched: true })
      })
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.props.match.params.id !== nextProps.match.params.id ) {
      this.props.getUserProfile(nextProps.match.params.id).then()
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

  renderFossils = fossils => {
    
    if(this.state.isCurrentUser && fossils.length === 0) {
      return <div>Create Your First Fossil</div>
    } else if(!this.state.isCurrentUser && fossils.length === 0) {
      return <div>This user doesn't have any fossils</div>
    } else {
      return fossils.map(fossil => {
        return <FossilPreview key={fossil.url} fossil={fossil} />
      })  
    }
  }

  render() {
    const { name, email, avatar } = this.props.user;
    const { fossils } = this.props.fossil;
    
    return (
      <div className="page-wrapper">
        <SearchBar />
        <div className="profile-container">
          
          <div className="img-container">
             {avatar !== undefined && <img src={`${process.env.REACT_APP_AWS_URL}/${avatar}`} alt="" />}
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
          {this.state.fetched && this.renderFossils(fossils)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.profile,
    currentUser: state.user,
    fossil: state.fossil
  }
}

export default connect(mapStateToProps, { getUserProfile, changeUserAvatar, fetchUserFossils })(Profile);