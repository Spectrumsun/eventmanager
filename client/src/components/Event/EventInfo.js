import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';

class EventInfo extends Component {
  componentDidMount() {
    this.props.onOneEvent(this.props.match.params.id);
  }

  render() {
    const center = new Object(this.props.events && this.props.events.centers && this.props.events.centers);
    console.log(center.centerName);
    const event = (
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="container" style={{ width: '45rem' }}>
          <div className="card loginCard">
            <div className="card-header dark">
              <h1 className="color">Event Info</h1>
            </div>
            <div className="card-body">
              <form action="addevent.html">
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-lg-2 col-form-label"><strong>Event</strong></label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control-plaintext " id="staticEmail" value={this.props.events.eventName} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Date</strong></label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.events.eventdate} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Time</strong></label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.events.time} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label"><strong>Purpose</strong></label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.events.purpose} />
                  </div>
                </div>
                <h5><strong>Center</strong></h5>
                <ul className="list-group col-md-6">
                  <Link to={`/centers/${center.id}`} key={center.id} style={{ color: 'black' }}>
                    <li className="list-group-item centerlist">{center.centerName}</li>
                  </Link>
                </ul>
                <br/>
                <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
              </form>
              <a className="btn btn-danger" href="viewevent.html" style={{ marginLeft: '20px' }}>Delete</a>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        {event}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.loadedEvent
});

const mapDispatchToProps = dispatch => ({
  onOneEvent: id => dispatch(actions.initGetOneEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo);
