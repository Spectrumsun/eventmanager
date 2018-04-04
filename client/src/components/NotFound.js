import React from 'react';
import Footer from './UI/Footer';

const notFound = () => (
  <div>
    <div className="cover">
      <a href="/">
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/skybound/image/upload/v1522578533/404.gif"
          alt="Second slide"
        />
      </a>
    </div>
    <Footer />
  </div>
);

export default notFound;
