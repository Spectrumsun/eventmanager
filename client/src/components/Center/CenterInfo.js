import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import EditCenter from './EditCenter';

class CenterInfo extends Component {
  state = {
    loadedCenter: null
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.id) {
      if (!this.state.loadedCenter || (this.state.loadedCenter.id !== this.props.id )) {
        axios.get(`/centers/${this.props.match.params.id}`)
          .then((res) => {
            this.setState({ loadedCenter: res.data.center });
            console.log(this.state.loadedCenter.events);
          });
      }
    }
  }

  render() {
    let center = <p>invalied center!!!</p>;
    if (this.props.id) {
      center = <p>Loading</p>;
    }
    if (this.state.loadedCenter) {
      center = (
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
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.centerName} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Address</strong></label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.address} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>City</strong></label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.city} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Availability</strong></label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.availability} />
                  </div>
                </div>
                <h5><strong>Events</strong></h5>
                <ul className="list-group col-md-6">
                  {this.state.loadedCenter.events.map(eve =>
                    (<li className="list-group-item centerlist" key={eve.id} >
                      <strong>{eve.eventName}</strong><h6>{eve.eventdate}</h6>
                    </li>))}
                </ul>
                <br />
                <h5><strong>Avaliable Facilities</strong></h5>
                <ul className="list-group col-md-4">
                  {this.state.loadedCenter.facility.map(list =>
                    (<li
                      className="list-group-item centerlist"
                      key={this.props.match.params.id}
                    >{list}
                    </li>))}
                </ul>
                <br />
                <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
              </form>
              <a className="btn btn-danger" style={{ marginLeft: '20px' }}>Delete</a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {center}
      </div>
    );
  }
}


export default CenterInfo;
