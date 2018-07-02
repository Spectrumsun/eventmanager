import React from 'react';
import Centers from '../Center/ViewCenters';

/**
 * @description renders component to the DOM
 *
 * @function home
 *
 * @returns {JSX} JSX component for the home
 */
const home = () => (
  <div>
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide shift"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
        />
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
        />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/skybound/image/upload/v1522444977/eventmanager/static/image3.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>Our Event Centers are the best</h3>
            <p>You dont need to look any further</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/skybound/image/upload/v1522444978/eventmanager/static/image2.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>World class center to host your events</h3>
            <p>Very easy to book and check</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/skybound/image/upload/v1522444977/eventmanager/static/image33.jpg"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>Chooce from variety of Places</h3>
            <p>Just Login or Signup to access..</p>
          </div>
        </div>
        <div>
          <div className="list-group-item list-group-item-secondary">
            <h1
              className="center-item shadow"
              style={{ marginTop: '40px' }}
            >The Best
            </h1>
            <p
              className="container read"
              style={{ textAlign: 'justify' }}
            >
                Manage your events easily.
                Pick from our different centers to host your events.
                Each center has different facility. 
                projectors, car pack, swimming pools.
                We have centers for all types
                of events you want to organize.
                Easily check if a center is
                book up while you plan your event.
                It’s that easy and simple just
                create an account and browse
                through all our center and pick the one you like.
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata
                \sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr,sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo
                duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div >
      <Centers />
    </div>
  </div>

);

export default home;
