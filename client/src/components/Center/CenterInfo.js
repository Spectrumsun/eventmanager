import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid-random';
import * as action from '../../store/actions/index';

class CenterInfo extends Component {
  componentDidMount() {
    this.props.onFetOneCenters(this.props.match.params.id);
  }

  deleteCenter = (e) => {
    e.preventDefault();
    this.props.onDeleteCenter(
      this.props.match.params.id,
      this.props.history
    );
  }


  render() {
    const admin = this.props.auth.user === null ? 'nouser' : this.props.auth.user.role;
    const showbutton = (
      <div>
        <Link
          to={`/centers/edit/${this.props.match.params.id}`}
          key={this.props.match.params.id}
          style={{ color: '#35434A' }}
        >
          <button
            type="submit"
            className="btn btn-dark"
            style={{ float: 'left' }}
          >Edit
          </button>
        </Link>
        <Link
          to={`${this.props.history.push}/edit`}
          className="btn btn-danger"
          onClick={this.deleteCenter}
          style={{ marginLeft: '20px' }}
        >Delete
        </Link>
      </div>
    );

    const progress = (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          style={{ width: '10%' }}
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    );

    const set = this.props.loadedCenter;
    const isLoading = (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <div className="card loginCard" style={{ width: '45rem' }}>
            <div className="card-header dark">
              <h1 className="color">Center Info</h1>
            </div>
            <div className="loader" />
            <p className="center-item shadow" >
              Unable to connect. Refresh your browser or check your internet connection
            </p>
          </div>
        </div>
      </div>
    );

    const center = (
      <div style={{ paddingTop: '45px' }}>
        <div className="card-header dark">
          <h1 className=" container color" style={{ paddingTop: '10px' }}>Center Info</h1>
        </div>
        <img
          className="card-img-top"
          src={set.imageurl}
          style={{ height: '600px', width: '100%' }}
          alt="center"
        />
        <div className="card loginCard">
          <div className="container card-body" style={{ width: '45rem' }}>
            <h1><strong>{set.centerName}</strong></h1>
            <h6 className="list-group-item">{set.address}</h6>
            <br />
            <div className="list-group-item centerlist" >
              <h3 style={{}}>About</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <br />
            <h1><strong>City</strong></h1>
            <h6 className="list-group-item col-md-4">{set.city}</h6>
            <br />
            <h5 ><strong>Availability</strong></h5>
            <h6 className="list-group-item col-md-4">{set.availability}</h6>
            <br />
            <h5><strong>Avaliable Facilities</strong></h5>
            <ul className="list-group col-md-4">
              {set && set.facility && set.facility.map(list =>
                    (<li
                      className="list-group-item centerlist"
                      key={uuid()}
                    >
                      {list}
                     </li>))}
            </ul>
            <br />
            <h5><strong>Events</strong></h5>
            {set && set.events && set.events.map(eve =>
                  (<Link to={`/events/${eve.id}`} key={eve.id} style={{ color: 'black' }}>
                    <div className="card d-lg-inline-block" style={{ width: '15rem' }}>
                      <img
                        className="card-img-top"
                        src="https://res.cloudinary.com/skybound/image/upload/v1521281912/image1.jpg"
                        alt="Card cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{eve.eventName}</h4>
                        <p className="card-text">{eve.eventdate}</p>
                      </div>
                    </div>
                   </Link>))}
            <br />
            {admin === 'ADMIN1' ? showbutton : null}
          </div>
        </div>
      </div>
    );


    return (
      <div>
        { this.props.loadedCenter === undefined || this.props.error != false ? isLoading : center}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loadedCenter: state.centers.loadedCenter,
  auth: state.auth,
  error: state.centers.error
});

const mapDispatchToProps = dispatch => ({
  onFetOneCenters: id => dispatch(action.getOneCenter(id)),
  onDeleteCenter: (id, history) => dispatch(action.initDeleteCenter(id, history))
});


export default connect(mapStateToProps, mapDispatchToProps)(CenterInfo);
