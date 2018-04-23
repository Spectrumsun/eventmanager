import React from 'react';
import Footer from './UI/Footer';

/**
 * @description renders component to the DOM
 *
 * @function notFound
 *
 * @returns {JSX} JSX component when the url is not found on the host
 */
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
