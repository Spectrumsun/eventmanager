import React, { Component } from 'react';
import axios from 'axios';

class CenterInfo extends Component {
  state = {
    loadedCenter: null
  }

  componentDidUpdate() {
    console.log(this.props)
    if (this.props.id) {
      if (!this.state.loadedCenter || (this.state.loadedCenter.id && this.state.loadedCenter !== +this.props.id)) {
        axios.get(`/centers/${this.props.id}`)
          .then((res) => {
            this.setState({ loadedCenter: res.data.center });
            console.log(this.state.loadedCenter);
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
              <form action="addcenter.html">
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Center name</label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.centerName} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Address</label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.address} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">City</label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.city} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Availability</label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.loadedCenter.availability} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Events Holding</label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="Wedding, Seminar, Birthday" />
                  </div>
                </div>
                <h5>Avaliable Facilities</h5>
                <ul className="list-group col-md-4">
                  {this.state.loadedCenter.facility.map(list => <li className="list-group-item centerlist" key={this.props.id}>{list}</li>)}
                </ul>
                <br />
                <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
              </form>
              <a className="btn btn-danger" href="viewevent.html" style={{ marginLleft: '20px' }}>Delete</a>
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
