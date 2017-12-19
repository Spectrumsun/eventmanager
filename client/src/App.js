import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.css';

require('bootstrap');

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Footer/>
      </div>
    );
  }
}

export default App;
