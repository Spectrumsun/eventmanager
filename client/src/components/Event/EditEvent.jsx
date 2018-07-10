import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';
import { checkEvent } from '../../static/js/validator';

/**
 * @class EditEvent
 *
 * @extends {React.Component}
 */
export class EditEvent extends Component {
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
     event.preventDefault();
     checkEvent(this.state.name, this.state.startDate, this.state.endDate, this.state.time, this.state.purpose, this.state.center, (err, res) => {
       if (res) {
         this.setState({ formValid: true });
         this.props.initEditEvent(
           this.props.match.params.id, this.state,
           this.props.history
         ).then(() =>
           this.setState({ formValid: false }));
       }
     });
   }


   getCenter = () => {
     this.props.onInitCenters(3, 1);
   }

   add = () => {
     this.state.totalPage = this.props.page.pages;
     if (this.state.next < this.state.totalPage) {
       const nextPage = ++this.state.next;
       this.setState({ pageNumber: nextPage });
       this.setState({ next: nextPage });
       this.props.onInitCenters(3, nextPage);
     }
   }


  minus = () => {
    const limit = 1;
    if (limit < this.state.next) {
      const nextPage = --this.state.next;
      this.state.pageNumber = nextPage;
      this.props.onInitCenters(3, nextPage);
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

export const mapDispatchToProps = dispatch => ({
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

