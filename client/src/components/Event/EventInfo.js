import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';

class EventInfo extends Component {
  componentDidMount() {
    this.props.onOneEvent(this.props.match.params.id);
  }

  deletePost = () => {
    e.preventDefault();
    this.props.onDeleteEvent(this.props.match.params.id);
  }


  render() {
    const center = new Object(this.props.events && this.props.events.centers && this.props.events.centers);
    console.log(center);
    // console.log(events);
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

              <br />

              <h5><strong>Date</strong></h5>
              <h6 className="list-group-item centerlist">{this.props.events.eventdate}</h6>
              <br />

              <h5><strong>Time</strong></h5>
              <h6 className="list-group-item centerlist">{this.props.events.time}</h6>
              <br />

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

              <Link to={`/events/edit/${this.props.match.params.id}`} key={this.props.match.params.id} style={{ color: '#35434A' }}>
                <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: '20px' }}
                data-toggle="modal"
                data-target="#exampleModal"
              >
                  Delete
              </button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h6>Are you sure you want to delete <strong>{this.props.events.eventName} ?</strong></h6>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-danger">Yes</button>
                    </div>
                  </div>
                </div>
              </div>


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
  onOneEvent: id => dispatch(actions.initGetOneEvent(id)),
  onDeleteEvent: id => dispatch(actions.initDeleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo);
