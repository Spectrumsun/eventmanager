import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.css';

require('bootstrap');


const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
    </div>
  </BrowserRouter>
);

export default App;
