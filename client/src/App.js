import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/UI/NavBar';
// import Footer from './components/Footer';
import '../../node_modules/toastr/build/toastr.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.css';


require('bootstrap');

axios.defaults.baseURL = 'http://localhost:5000/api/v1/';

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
    </div>
  </BrowserRouter>
);

export default App;
