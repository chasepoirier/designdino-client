import React, { Component } from 'react';
import Customers from './components/customers/customers'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

import './index.css';
import './assets/fonts/style.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        {/*<Customers />*/}
      </div>
    );
  }
}

export default App;
