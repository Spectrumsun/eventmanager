// eslint-disable-next-line prefer-stateless-function
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.css';


require('bootstrap');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <NavBar />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
