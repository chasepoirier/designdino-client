import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUserAvatar, updateUserProfile, fetchUserLikes } from '../../actions/User';

class OwnProfile extends Component {

  state = {
    edits: {
      title: '',
      bio: ''
    },
    editing: false
  }

  componentWillMount() {
    this.setState({ edits: { title: this.props.user.title, bio: this.props.user.bio} })
  }

  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    this.props.changeUserAvatar(this.props.user.username, data).then(() => window.location.reload())
  }

  submit = data => {
    this.setState({ editing: false })
    this.props.updateUserProfile(this.props.user._id, this.state.edits)
  }

  onChange = e => {
    if(e.target.classList.contains("green")) {
      e.target.style.width = ((e.target.value.length + 1) * 10) + 'px';
      if(e.target.value === "") {
        e.target.style.width = 200 + 'px';
      }
    }

    this.setState({ edits: { ...this.state.edits, [e.target.name]: e.target.value } })
  }

  toggleFossils = e => {
    if(e.target.id == 1) {
      this.props.fetchFossils('fossils');

      e.target.classList += ' active '
      e.target.parentNode.children[1].classList.remove('active')
    } else {
      this.props.fetchFossils('likes');
      e.target.classList += ' active '
      e.target.parentNode.children[0].classList.remove('active')
      this.props.fetchUserLikes(this.props.user._id)
    }
  }

  renderTitle = () => {
    const { title } = this.props.user;
    if(title === null || title === "") {
      return <span><input onClick={() => this.setState({ editing: true })} maxLength="34" onChange={this.onChange} name="title" className="green placeholder" type="text" placeholder="Give yourself a title..." /></span>
    } else if(this.state.editing === true) {
      return <span><input ref="title" onClick={() => this.setState({ editing: true })} maxLength="34" onChange={this.onChange} name="title" className="green placeholder" type="text" placeholder={title} /></span>
    } else {
      return <span className="green">{title}</span>
    }
  } 

  renderBio = () => {
    const { bio } = this.props.user
    if(bio === null || bio === "") {
      return <textarea onClick={() => this.setState({ editing: true })} className="bio placeholder" onChange={this.onChange} name="bio" type="text" placeholder="Tell the world what you love doing..." />
    } else if(this.state.editing === true) {
      return <textarea onClick={() => this.setState({ editing: true })} className="bio placeholder" onChange={this.onChange} name="bio" type="text" placeholder={bio} />
    } else {
      return <div className="bio">{bio}</div>
    }
  }

  render() {
    const { name, email, avatar } = this.props.user;
    
    return (
        <span>
        <div className="profile-container">
          <div className="img-container">
             {avatar !== undefined && <img src={`${process.env.REACT_APP_AWS_URL}/${avatar}`} alt="" />}
              <form id="image">
                <input type="file" accept="image/*" onChange={this.handleUploadFile} className="input" /> 
              </form>
          </div>
          <div className="info-container">
            <div className="text bold"> {name} / {this.renderTitle()}</div>
          </div>
          {this.renderBio()}
          <div className="social-links">
            <a href=""><div className="icon twitter"></div></a>
            <a href=""><div className="icon fb"></div></a>
            <a href=""><div className="icon add"></div></a>
          </div>
        </div>
        <div className="profile-divider">
          <div className="toggle-fossils">
            <div id="1" onClick={this.toggleFossils} className="text active">Fossils</div>
            <div id="2" onClick={this.toggleFossils} className="text">Likes</div>
          </div>

            {this.state.editing ? 
              <div className="edit-buttons">
                <div onClick={this.submit} className="save button">Save</div>
                <div onClick={() => this.setState({ editing: false })} className="cancel button">Cancel</div> 
              </div>
              : 
              <div onClick={() => this.setState({ editing: true, save: false })} className="edit button">Edit</div> 
            }

        </div>
        <div className="hairline"></div>
        </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.profile,
  }
}

export default connect(mapStateToProps, { changeUserAvatar, updateUserProfile, fetchUserLikes })(OwnProfile);