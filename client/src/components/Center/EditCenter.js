import React, { Component } from 'react';
import toast from 'toastr';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CenterFrom from './Form/CenterForm';
import * as action from '../../store/actions/index';

class AddCenter extends Component {
    state = {
      name: this.props.loadedCenter.centerName,
      city: this.props.loadedCenter.city,
      address: this.props.loadedCenter.address,
      availability: this.props.loadedCenter.availability,
      facility: this.props.loadedCenter.facility || [],
      values: '',
      image: this.props.loadedCenter.imageurl,
      publicid: this.props.loadedCenter.imageId,
    }

    onClick = () => {
      this.setState({ facility: this.state.facility.concat([this.state.values]) });
      this.setState({ values: '' });
    }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

   onSubmit = (e) => {
     if (e.target.type != 'textarea' && e.which === 13 /* Enter */) {
       e.preventDefault();
     }
     e.preventDefault();
     if (this.state.name === '') {
       toast.error('Center Name cannot be blank');
     } else if (this.state.date === '') {
       toast.error('Center city cannot be blank');
     } else if (this.state.time === '') {
       toast.error('Center Address cannot be blank');
     } else if (this.state.purpose === '') {
       toast.error('Center Availability must be set');
     } else {
       this.props.initEditCenter(
         this.props.match.params.id,
         this.state, this.props.history
       );
     }
   }

    removeFacility = (i) => {
      const array = this.state.facility;
      array.splice(i, 1);
      this.setState({ facility: array });
    }


    render() {
      return (
        <div className="container" style={{ paddingTop: '100px' }}>
          <div className="card card w-50 loginCard ">
            <div className="card-header dark">
              <h1 className="color">Edit Center</h1>
            </div>
            <CenterFrom
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              name={this.state.name}
              city={this.state.city}
              address={this.state.address}
              availability={this.state.availability}
              values={this.state.values}
              image={this.state.image}
              publicid={this.state.publicid}
              onClick={this.onClick}
              facility={this.state.facility}
              removeFacility={this.removeFacility}
              disabled={this.state.values}
            />
          </div>
        </div>
      );
    }
}

AddCenter.propTypes = {
  initEditCenter: PropTypes.func.isRequired,
  loadedCenter: PropTypes.shape({
    centerName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    facility: PropTypes.array.isRequired,
    imageurl: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};


AddCenter.defaultProps = {
  loadedCenter: PropTypes.shape({
    userId: 1,
    eventName: 'eventName',
    eventdate: '2018-10-02',
    time: '11:00',
    purpose: 'fun',
    facility: ['example']
  }),
};


const mapStateToProps = state => ({
  loadedCenter: state.centers.loadedCenter,
});

const mapDispatchToProps = dispatch => ({
  initEditCenter: (id, input, history) => dispatch(action.initEditCenter(id, input, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddCenter);
