import React, { Component } from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import PropTypes from 'prop-types';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';

/**
 * @class AddEvent
 *
 * @extends {React.Component}
 */
class AddEvent extends Component {
   state = {
     name: '',
     date: '',
     time: '',
     purpose: '',
     center: '',
     totalPage: '',
     next: 1,
     centerName: '',
     pageNmber: ''
   }


   /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof AddEvent
   *
   * @returns {void}
   */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  /**
   * @description vaildate data in state
   * sends state to api with action dispatch
   * @param {any} event
   *
   * @memberof AddEvent
   *
   * @returns {void}
   */
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === '') {
      toast.error('Event Name cannot be blank');
    } else if (this.state.date === '') {
      toast.error('Event Date cannot be blank');
    } else if (this.state.time === '') {
      toast.error('Event Time cannot be blank');
    } else if (this.state.purpose === '') {
      toast.error('Event Purpose cannot be blank');
    } else if (this.state.center === '') {
      toast.error('You have to choose a Center');
    } else {
      this.props.initPostEvent(
        this.state,
        this.props.history
      );
    }
  }

  getCenter = (e) => {
    this.props.onInitCenters(3, 1);
  }


  add = () => {
    this.setState({ totalPage: this.props.page.pages });
    this.state.totalPage = this.props.page.pages;
    if (this.state.next < this.state.totalPage) {
      const me = ++this.state.next;
      this.state.pageNmber = me;
      this.setState({ pageNmber: me });
      this.setState({ next: me });
      this.props.onInitCenters(3, me);
    }
  }


  minus = () => {
    const limit = 1;
    if (limit < this.state.next) {
      const me = --this.state.next;
      this.state.pageNmber = me;
      this.setState({ pageNmber: me });
      this.props.onInitCenters(3, me);
    }
  }

  /**
   * @description get selectCenter id and state state
   * @param {any} event
   *
   * @memberof AddEvent
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
   * @memberof AddEvent
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const numberOfPages = (
      <li className="page-item">
        <a className="page-link">
                Page {this.state.pageNmber} of {this.state.totalPage}
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
      </h6>)

    return (
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="card card w-50 loginCard">
          <div className="card-header dark">
            <h1 className="color">Add Event</h1>
          </div>
          <EventForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            name={this.state.name}
            date={this.state.date}
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
          />
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  initPostEvent: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  onInitCenters: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  page: state.centers.pagination,
});


const mapDispatchToProps = dispatch => ({
  initPostEvent: (input, history) =>
    dispatch(action.initPostEvent(input, history)),
  onInitCenters: (limit, page) =>
    dispatch(action.initCenters(limit, page))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);

