import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagContainer from './TagContainer';
import HeaderImage from './HeaderImage';
import { createNewFossil } from '../../actions/Fossil'

class AddFossil extends Component {

  state = {
    data: {
      tags: [],
      fossilName: '',
      file: {},
      desc: ''
    }
  }
  
  addTag = tag => {
    let tags = [...this.state.data.tags];
    tags.push(tag);
    this.setState({ data:{ ...this.state.data, tags }});
  }

  removeTag = index => {
    let tags = [...this.state.data.tags];
    tags.splice(index, 1);
    this.setState({ data:{ ...this.state.data, tags }});
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  setHeaderFile = file => {
    this.setState({ data:{ ...this.state.data, file }});
  }

  submitFossil = e => {
    e.preventDefault();
    this.props.createNewFossil(this.props.user.id, this.state.data).then(fossil => this.props.history.push(`/fossils/${fossil.url}`))
  }

  render() {
    const { name, avatar, email, title } = this.props.user;
    return (
      <span>
      <div id="progress-bar"></div>
      <div className="page-wrapper">
        <div className="top-content">
          
          <HeaderImage file={this.setHeaderFile} />

          <form id="sideContent" className="side-info">
            <textarea onChange={this.onChange} className="fossil-title" type="text" rows="2" name="fossilName" placeholder="Give your fossil a title"></textarea>
            <div className="fossil-creator-container">

              {avatar && <div className="img-container"><img src={`${process.env.REACT_APP_AWS_URL}/${avatar}`} alt=""/></div> } 

              <div className="info=container">
                <div className="text bold">{name} / <span className="green"> {title} </span></div>
              </div>
            </div>

            <TagContainer removeTag={this.removeTag} addTag={this.addTag} />

            <div onClick={this.submitFossil} className="download-cta" id="submitAddFossil">Create Fossil</div>
          </form>
        </div>
        <div className="about-fossil">About the File
          <form id="about" >
            <textarea onChange={this.onChange} name="desc" placeholder="Write something awesome" rows="5"></textarea>
          </form>
        </div>
        <div className="source-fossils">
          <div className="about-fossil">Add Source Fossils</div>
          <form id="sourceFossil"   className="add">
            <input  id="sources" className="input" type="file" name="file" multiple  />
            <div className="source">
              <img id="source1" src="" alt=""/>
            </div>
          </form>
        </div>
      </div>
      </span>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
} 

export default connect(mapStateToProps, { createNewFossil })(AddFossil);

