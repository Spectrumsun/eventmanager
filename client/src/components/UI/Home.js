import React from 'react';
import Centers from '../Center/ViewCenters';

const style1 = {
  textAlign: 'justify'
};


const home = () => (
  <div>
    <div id="carouselExampleSlidesOnly" className="carousel slide shift" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://res.cloudinary.com/skybound/image/upload/v1521281912/image3.jpg" alt="First slide" />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>Our Event Centers are the best</h3>
            <p>You dont need to look any further</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://res.cloudinary.com/skybound/image/upload/v1521281912/image2.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>World class center to host your events</h3>
            <p>Very easy to book and check</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://res.cloudinary.com/skybound/image/upload/v1521281912/image33.jpg" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>Chooce from variety of Places</h3>
            <p>Just Login or Signup to access..</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div className="container">
          <h1 className="center-item shadow" >The Best</h1>
          <p style={style1}>Manage your events easily. Pick from our different centers to host your events. Each center has different facility. projectors, car pack, swimming pools.  We have centers for all types of events you want to organize.
                Easily check if a center is book up while you plan your event. It’s that easy and simple just create an account and browse through all our center and pick the one you like.
          </p>
          <Centers />
        </div>
      </div>
    </div>
    <footer >
      <p>Event Managment &copy; 2017</p>
    </footer>
  </div>

);

export default home;
