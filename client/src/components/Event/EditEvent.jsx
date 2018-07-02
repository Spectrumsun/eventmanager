import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'toastr';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';

/**
 * @class EditEvent
 *
 * @extends {React.Component}
 */
class EditEvent extends Component {
   state = {
     name: this.props.loadedEvent.eventName,
     startDate: this.props.loadedEvent.startDate,
     endDate: this.props.loadedEvent.endDate,
     time: this.props.loadedEvent.time,
     purpose: this.props.loadedEvent.purpose,
     center: this.props.loadedEvent.centerId,
     totalPage: '',
     next: 1,
     centerName: '',
     pageNumber: '',
     formValid: false,
   }

  /**
   * @description run action on component mount to reload data
   *
   * @param {any} props.params.token
   *
   * @memberof EditEvent
   */
   componentWillMount() {
     this.props.onOneEvent(this.props.match.params.id);
   }

  /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof EditEvent
   *
   * @returns {void}
   */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }


  /**
   * @description vaildate data in state
   * sends state to api with action dispatch
   * @param {any} event
   *
   * @memberof EditEvent
   *
   * @returns {void}
   */
   onSubmit = (event) => {
     event.preventDefault();
     this.setState({ formValid: false });
     const reWhiteSpace = new RegExp(/^\s+$/);
     if (this.state.name === '') {
       toast.error('Event Name cannot be blank');
     } else if (reWhiteSpace.test(this.state.fullname) === true) {
       toast.error('Event Name cannot white space');
     } else if (this.state.startDate === '') {
       toast.error('Event start date cannot be blank');
     } else if (this.state.endDate === '') {
       toast.error('Event end date cannot be blank');
     } else if (this.state.endDate < this.state.startDate) {
       toast.error('!Event end date cannot be behind event start date');
     } else if (this.state.time === '') {
       toast.error('Event Time cannot be blank');
     } else if (this.state.purpose === '') {
       toast.error('Event Purpose cannot be blank');
     } else if (this.state.center === '') {
       toast.error('You have to choose a Center');
     } else {
       this.setState({ formValid: true });
       this.props.initEditEvent(
         this.props.match.params.id, this.state,
         this.props.history
       ).then(() =>
         this.setState({ formValid: false }));
     }
   }


   getCenter = () => {
     this.props.onInitCenters(3, 1);
   }

   add = () => {
     this.setState({ totalPage: this.props.page.pages });
     this.state.totalPage = this.props.page.pages;
     if (this.state.next < this.state.totalPage) {
       const me = ++this.state.next;
       this.state.pageNumber = me;
       this.setState({ pageNumber: me });
       this.setState({ next: me });
       this.props.onInitCenters(3, me);
     }
   }


  minus = () => {
    const limit = 1;
    if (limit < this.state.next) {
      const me = --this.state.next;
      this.state.pageNumber = me;
      this.setState({ pageNumber: me });
      this.props.onInitCenters(3, me);
    }
  }
  /**
   * @description get selectCenter id and state state
   * @param {any} event
   *
   * @memberof EditEvent
   *
   * @returns {void}
   */
  selectCenter = (id, myCenter) => {
    this.state.center = id;
    this.setState({ centerName: myCenter });
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof EditEvent
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const numberOfPages = (
      <li className="page-item">
        <a className="page-link">
                Page {this.state.pageNumber} of {this.state.totalPage}
        </a>
      </li>);
    const numberOfPages1 = (
      <li className="page-item">
        <a className="page-link">
                  Page 1  of {this.props.page.pages }
        </a>
      </li>);
    const showCenterNane = (
      <h6 className="list-group-item col-md-9">
        Center Name : {this.state.centerName}
      </h6>);
    return (
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="card card w-50 loginCard">
          <div className="card-header dark">
            <h1 className="color">Edit Event</h1>
          </div>
          <EventForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            name={this.state.name}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            time={this.state.time}
            purpose={this.state.purpose}
            getCenter={this.getCenter}
            selectCenter={(id, myCenter) => this.selectCenter(id, myCenter)}
            add={this.add}
            minus={this.minus}
            centerName={this.state.centerName}
            numberOfPages={numberOfPages}
            totalPage={this.state.totalPage}
            numberOfPages1={numberOfPages1}
            showCenterNane={showCenterNane}
            formValid={this.state.formValid}
          />
        </div>
      </div>
    );
  }
}

EditEvent.propTypes = {
  onOneEvent: PropTypes.func.isRequired,
  initEditEvent: PropTypes.func.isRequired,
  loadedEvent: PropTypes.shape({
    eventName: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.endDate,
    purpose: PropTypes.string,
    time: PropTypes.string,
    userId: PropTypes.number,
    centerId: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  onInitCenters: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  loadedEvent: state.events.loadedEvent,
  page: state.centers.pagination,
  error: state.events.error
});

const mapDispatchToProps = dispatch => ({
  onOneEvent: id => dispatch(action.initGetOneEvent(id)),
  initEditEvent: (id, events, history) =>
    dispatch(action.initEditEvent(id, events, history)),
  onInitCenters: (limit, page) =>
    dispatch(action.initCenters(limit, page))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEvent);

