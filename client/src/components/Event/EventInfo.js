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
              <h5 ><strong>Event Name</strong></h5>
                <h6 className="list-group-item centerlist">{this.props.events.eventName}</h6>
              
              <br/>
              
              <h5><strong>Date</strong></h5>
                <h6 className="list-group-item centerlist">{this.props.events.eventdate}</h6>
              <br/>

              <h5><strong>Time</strong></h5>
                <h6 className="list-group-item centerlist">{this.props.events.time}</h6>
              <br/>

               <h5><strong>Purpose</strong></h5>
                <h6 className="list-group-item centerlist">{this.props.events.purpose}</h6>
              <br />

              <h5><strong>Center</strong></h5>
              <ul className="list-group col-md-6">
                <Link to={`/centers/${center.id}`} key={center.id} style={{ color: '#35434A' }}>
                 <h6><li className="list-group-item centerlist">{center.centerName}</li></h6>
                </Link>
                </ul>
                <br />
                <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
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
