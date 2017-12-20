import React from 'react';

const style1 = {
  textAlign: 'justify'
};

const style2 = {
  width: '20rem'
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
          <img className="d-block w-100" src="./image/image1.jpg" alt="First slide" />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>Our Event Centers are the best</h3>
            <p>You dont need to look any further</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="./image/image2.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block caption">
            <h3>World class center to host your events</h3>
            <p>Very easy to book and check</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="./image/image3.jpg" alt="Third slide" />
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
          <h1 className="center-item shadow">Current Events</h1>
          <br />
          <div className="card d-lg-inline-block" style={style2}>
            <img className="card-img-top" src="./image/image33.jpg" alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title">Birthday Party</h4>
              <p className="card-text">A event to celebrate Life</p>
              <h6 className="card-text left">12-12-2017 | </h6>
              <h6 className="card-text">10:55 AM</h6>
              <a href="eventinfo.html" className="btn btn-primary">View</a>
            </div>
          </div>
          <div className="card d-lg-inline-block" style={style2}>
            <img className="card-img-top" src="./image/image2.jpg" alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title">Wedding </h4>
              <p className="card-text">A wedding party.</p>
              <h6 className="card-text left">12-12-2017 | </h6>
              <h6 className="card-text">10:55 AM</h6>
              <a href="eventinfo.html" className="btn btn-primary">View</a>
            </div>
          </div>
          <div className="card d-lg-inline-block" style={style2}>
            <img className="card-img-top" src="./image/image3.jpg" alt="Card  cap" />
            <div className="card-body">
              <h4 className="card-title">Seminar</h4>
              <p className="card-text">Having a Growth mindset.</p>
              <h6 className="card-text left">12-12-2017 | </h6>
              <h6 className="card-text">10:55 AM</h6>
              <a href="eventinfo.html" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default home;
