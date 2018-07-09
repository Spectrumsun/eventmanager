import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid-random';
import * as action from '../../store/actions/index';
import Footer from '../UI/Footer';
import Loading from '../UI/Loading';
/**
 * @class CenterInfo
 *
 * @extends {React.Component}
 */
export class CenterInfo extends Component {
  /**
   * @description run action on component mount to reload data
   *
   * @param {any} props.params.id
   *
   * @memberof CenterInfo
   */
  componentDidMount() {
    this.props.onFetOneCenters(this.props.match.params.id);
  }

  /**
   * @description deletecCenter a event when the delete button is clicked
   *
   * @param {any} event
   *
   * @memberof CenterInfo
   *
   * @returns {void}
   */
  deleteCenter = (e) => {
    e.preventDefault();
    this.props.onDeleteCenter(
      this.props.match.params.id,
      this.props.history
    );
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof CenterInfo
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const admin = this.props.auth.user === null
      ? 'nouser' :
      this.props.auth.user.role;
    const showButton = (
      <div>
        <Link
          to={`/centers/edit/${this.props.match.params.id}`}
          key={this.props.match.params.id}
          style={{ color: '#35434A' }}
        >
          <button
            type="submit"
            id="editCenter"
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
          id="deleteCenter"
        >Delete
        </Link>
      </div>
    );
    const { loadedCenter } = this.props;
    const center = (
      <div style={{ paddingTop: '55px', backgroundColor: 'white' }}>
        <div className="card-header dark">
          <h1
            className="container color centerTitle"
          >
            {loadedCenter.centerName}
          </h1>
        </div>
        <img
          className="card-img-top"
          src={loadedCenter.imageurl}
          style={{ height: '600px', width: '100%' }}
          alt="center"
        />
        <div>
          <div
            className="container card-body"
            style={{ width: '45rem' }}
          >
            <h1>
              <strong>{loadedCenter.centerName}</strong>
            </h1>
            <h6 className="list-group-item">{loadedCenter.address}</h6>
            <br />
            <div className="list-group-item centerlist" >
              <h3>About</h3>
              <p className="read" style={{ textAlign: 'justify' }}>
                {loadedCenter.about}
              </p>
            </div>
            <br />
            <h1><strong>City</strong></h1>
            <h6
              className="list-group-item col-md-4"
            >{loadedCenter.city}
            </h6>
            <br />
            <h5 ><strong>Availability</strong></h5>
            <h6
              className="list-group-item col-md-4"
            >{loadedCenter.availability}
            </h6>
            <br />
            <h5><strong>
              Avaliable Facilities
                </strong>
            </h5>
            <ul className="list-group col-md-4 text-capitalize">
              {loadedCenter && loadedCenter.facility && loadedCenter.facility.map(list =>
                (<li
                  className="list-group-item centerlist"
                  key={uuid()}
                >{list}
                 </li>))}
            </ul>
            <br />
            <h5><strong>Events</strong></h5>
            {loadedCenter && loadedCenter.events && loadedCenter.events.map(eventDate =>
                  (<div
                    key={Math.floor(Math.random() * 10906) + 30}
                    className="card d-lg-inline-block"
                    style={{ width: '15rem' }}
                  >
                    <div className="card-body">
                      <h6 className="card-text">
                        {eventDate.startDate} To {eventDate.endDate}
                      </h6>
                    </div>
                   </div>
                ))}
            <br />
            {admin === process.env.VALUE ? showButton : null}
          </div>
        </div>
        <Footer />
      </div>
    );

    return (
      <div>
        {
          this.props.loadedCenter === undefined ||
          this.props.error !== false ? <Loading /> : center
        }
      </div>
    );
  }
}

CenterInfo.propTypes = {
  onDeleteCenter: PropTypes.func.isRequired,
  onFetOneCenters: PropTypes.func.isRequired,
  error: PropTypes.bool,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number,
      role: PropTypes.string,
    })
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

  loadedCenter: PropTypes.shape({
    id: PropTypes.number,
    eventName: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    time: PropTypes.string,
    purpose: PropTypes.string,
  }),
};

CenterInfo.defaultProps = {
  loadedCenter: PropTypes.shape({
    userId: 1,
    centerName: 'eventName',
    address: '2018-10-02',
    time: '11:00',
    purpose: 'fun'
  }),
  error: false
};


const mapStateToProps = state => ({
  loadedCenter: state.centers.loadedCenter,
  auth: state.auth,
  error: state.centers.error
});

const mapDispatchToProps = dispatch => ({
  onFetOneCenters: id =>
    dispatch(action.getOneCenter(id)),
  onDeleteCenter: (id, history) =>
    dispatch(action.initDeleteCenter(id, history))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterInfo);
