import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as action from '../../store/actions/index';

class CenterInfo extends Component {
  componentDidMount() {
    this.props.onFetOneCenters(this.props.match.params.id);
  }

  render() {
    const center = (
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="card loginCard" style={{ width: '45rem' }}>
          <div className="card-header dark">
            <h1 className="color">Center Info</h1>
          </div>
          <div className="card-body">
            <form >
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Center name</strong></label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.loadedCenter.centerName} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Address</strong></label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.loadedCenter.address} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>City</strong></label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.loadedCenter.city} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Availability</strong></label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.loadedCenter.availability} />
                </div>
              </div>
              <h5><strong>Events</strong></h5>
              <ul className="list-group col-md-6">
                {this.props.loadedCenter && this.props.loadedCenter.events && this.props.loadedCenter.events.map(eve =>
                  (<Link to={`/events/${eve.id}`} key={eve.id} style={{ color: 'black' }}>
                    <li className="list-group-item centerlist" key={eve.id} >
                      <strong>{eve.eventName}</strong><h6>{eve.eventdate}</h6>
                    </li>
                   </Link>))}

              </ul>

              <br />
              <h5><strong>Avaliable Facilities</strong></h5>
              <ul className="list-group col-md-4">
                {this.props.loadedCenter && this.props.loadedCenter.facility && this.props.loadedCenter.facility.map(list =>
                    (<li
                      className="list-group-item centerlist"
                      key={this.props.match.params.id}
                    >{list}
                     </li>))}
              </ul>


              <br />
              <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
            </form>
            <Link to={`${this.props.history.push}/edit`} className="btn btn-danger" style={{ marginLeft: '20px' }}>Delete</Link>
          </div>
        </div>
      </div>
    );


    return (
      <div>
        {center}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loadedCenter: state.centers.loadedCenter
});

const mapDispatchToProps = dispatch => ({
  onFetOneCenters: id => dispatch(action.getOneCenter(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(CenterInfo);

