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
    this.props.onDeleteCenter(this.props.match.params.id, this.props.history);
  }


  render() {
    const admin = this.props.auth.user.role;
    const showbutton = (
      <div>
        <Link to={`/centers/edit/${this.props.match.params.id}`} key={this.props.match.params.id} style={{ color: '#35434A' }}>
          <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
        </Link>
        <Link to={`${this.props.history.push}/edit`} className="btn btn-danger" onClick={this.deleteCenter} style={{ marginLeft: '20px' }}>Delete</Link>
      </div>
    );

    const progress = (
      <div className="progress">
        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" />
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
            <p className="center-item shadow" >Unable to connect. Refresh your browser or check your internet connection</p>
          </div>
        </div>
      </div>
    );

    const center = (
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="card loginCard" style={{ width: '45rem' }}>
          <div className="card-header dark">
            <h1 className="color">Center Info</h1>
          </div>
          <div className="card-body">
            <h5 ><strong>Center name</strong></h5>
            <h6 className="list-group-item">{set.centerName}</h6>
            <br />
            <h5 ><strong>Address</strong></h5>
            <h6 className="list-group-item">{set.address}</h6>
            <br />
            <h5 ><strong>City</strong></h5>
            <h6 className="list-group-item">{set.city}</h6>
            <br />
            <h5 ><strong>Availability</strong></h5>
            <h6 className="list-group-item">{set.availability}</h6>
            <br />
            <h5><strong>Events</strong></h5>
            <ul className="list-group col-md-6">
              {set && set.events && set.events.map(eve =>
                  (<Link to={`/events/${eve.id}`} key={eve.id} style={{ color: 'black' }}>
                    <li className="list-group-item centerlist" key={eve.id} >
                      <strong>{eve.eventName}</strong><h6>{eve.eventdate}</h6>
                    </li>
                  </Link>))}
            </ul>
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
