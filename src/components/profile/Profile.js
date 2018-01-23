import React, { Component } from 'react';
import FossilPreview from '../fossil/FossilPreview';
import SearchBar from '../SearchBar';

import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/Profile';
import { fetchUserFossils } from '../../actions/Fossil';

import OwnProfile from './OwnProfile';
import PublicProfile from './PublicProfile';

import './profile.css';

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
    }).catch(err => this.props.history.push('/register'))
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.props.match.params.id !== nextProps.match.params.id ) {
      this.props.getUserProfile(nextProps.match.params.id).then().catch(err => this.props.history.push('/register'))
    }
  }

  componentWillReceiveProps(nextProps) {
    
    if(nextProps.currentUser.username !== 'undefined') {
      if(nextProps.currentUser.username === nextProps.user.username) {
        this.setState({ isCurrentUser: true })
      } else {
        this.setState({ isCurrentUser: false })
      }
    }
  }

  renderFossils = fossils => {
    
    if(this.state.isCurrentUser && fossils.length === 0) {
      return <div>Create Your First Fossil</div>
    } else if(!this.state.isCurrentUser && fossils.length === 0) {
      return <div>This user doesn't have any fossils</div>
    } else {
      return fossils.map(fossil => {
        return <FossilPreview key={fossil.url} onProfile={true} fossil={fossil} />
      })  
    }
  }

  render() {
    const { name, email, avatar } = this.props.user;
    const { fossils } = this.props.fossil;
    
    return (
      <div className="page-wrapper">
        <SearchBar />
        
        {this.state.isCurrentUser ? <OwnProfile /> : <PublicProfile user={this.props.user} />}
        
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

export default connect(mapStateToProps, { getUserProfile, fetchUserFossils })(Profile);