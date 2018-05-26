import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../UI/Footer';
import Loading from '../UI/Loading';
import * as action from '../../store/actions/index';

/**
 * @class EventInfo
 *
 * @extends {React.Component}
 */
class EventInfo extends Component {
  /**
   * @description run action on component mount to reload data
   *
   * @param {any} props.params.token
   *
   * @memberof EventInfo
   */
  componentWillMount() {
    this.props.onOneEvent(this.props.match.params.id);
  }

  /**
   * @description deleteEvent a event when the delete button is clicked
   *
   * @param {any} event
   *
   * @memberof EditEvent
   *
   * @returns {void}
   */
  deleteEvent = (e) => {
    e.preventDefault();
    this.props.onDeleteEvent(
      this.props.match.params.id,
      this.props.history
    );
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof EditEvent
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const {
      eventName,
      eventdate,
      time,
      purpose,
    } = this.props.events;
    const eventOwner = (
      <div>
        <Link
          to={`/events/edit/${this.props.match.params.id}`}
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
        <button
          type="button"
          className="btn btn-danger"
          style={{ marginLeft: '20px' }}
          data-toggle="modal"
          data-target="#exampleModal"
        >
                  Delete
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                >Delete Event
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h6>
                  Are you sure you want to delete ->
                  <strong>{eventName} ?</strong>
                </h6>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.deleteEvent}
                >Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    const { isAuthenticated } = this.props.auth;
    const id = this.props.auth.user === null ?
      'nouser' : this.props.auth.user.id;

    const centers = new Object(this.props.events &&
       this.props.events.centers &&
       this.props.events.centers);

    const load = (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <div className="container" style={{ width: '45rem' }}>
            <div className="card loginCard">
              <div className="card-header dark">
                <h1 className="color">Event Info</h1>
              </div>
              <div className="card-body">
                <h5 ><strong>Event Name</strong></h5>
                <h6 className="list-group-item">{eventName}</h6>
                <br />
                <h5><strong>Date</strong></h5>
                <h6 className="list-group-item">{eventdate}</h6>
                <br />
                <h5><strong>Time</strong></h5>
                <h6 className="list-group-item">{time}</h6>
                <br />
                <h5><strong>Purpose</strong></h5>
                <h6 className="list-group-item">{purpose}</h6>
                <br />
                <h5><strong>Center</strong></h5>
                <ul className="list-group col-md-6">
                  { <Link
                    to={`/centers/${centers.id}`}
                    key={centers.id}
                    style={{ color: '#35434A' }}
                  >
                    <h6>
                      <li
                        className="list-group-item centerlist"
                      >{centers.centerName}
                      </li>
                    </h6>
                  </Link> }
                </ul>
                <br />
                {
                  this.props.events.userId !== id ||
                  !isAuthenticated ?
                  null :
                  eventOwner
                  }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
    return (
      <div>
        {
          this.props.events ===
          undefined ||
          this.props.error !=
          false ?
            <Loading /> : load
          }
      </div>
    );
  }
}

EventInfo.propTypes = {
  onOneEvent: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number,
      role: PropTypes.string,
    })
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  events: PropTypes.shape({
    id: PropTypes.number,
    eventName: PropTypes.string,
    eventdate: PropTypes.string,
    time: PropTypes.string,
    purpose: PropTypes.string,
  }),
};

EventInfo.defaultProps = {
  events: PropTypes.shape({
    userId: 1,
    eventName: 'eventName',
    eventdate: '2018-10-02',
    time: '11:00',
    purpose: 'fun'
  }),
};


const mapStateToProps = state => ({
  events: state.events.loadedEvent,
  error: state.events.error,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  onOneEvent: id => dispatch(action.initGetOneEvent(id)),
  onDeleteEvent: (id, history) =>
    dispatch(action.initDeleteEvent(id, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventInfo);
