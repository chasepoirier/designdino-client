import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import FossilPreview from '../fossil/FossilPreview'
import { connect } from 'react-redux';
import { getAllFossils } from '../../actions/Fossil';

class Home extends Component {


  componentWillMount() {
    this.props.getAllFossils();
    this.props.fossil.loaded = false;
  }

  render() {
    const { username } = this.props.user;
    
    let allFossils;

    const { fossils, loaded } = this.props.fossil;
    if(loaded) {
        allFossils = fossils.map(fossil => {
          return <FossilPreview key={fossil.url} fossil={fossil} />
        })
    }

    return (

      <div className="page-wrapper">
      <SearchBar />
      

      {!username &&
      <div className="hero-section">
        <div className="content">
          <h1>Welcome to DesignDino.</h1>
          <div className="tagline">An open source design platform based on dinosaurs</div>
          <div className="description">Discover, connect and download fossils to advance your skillsets and contrbute to community discussions.</div>
        </div>
      </div>
      }

      <div className="fossil-container">
        {allFossils}
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fossil: state.fossil,
    user: state.user
  }
}


export default connect(mapStateToProps, { getAllFossils })(Home);