/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import axios from 'axios';
import PropTypes from 'prop-types';
import CenterFrom from './Form/CenterForm';
import * as action from '../../store/actions/index';

/**
 * @class AddCenter
 *
 * @extends {React.Component}
 */
class AddCenter extends Component {
    state = {
      name: '',
      city: '',
      address: '',
      about: '',
      availability: '',
      values: '',
      facility: [],
      image: '',
      preview: '',
      imageurl: '',
      publicUrlId: '',
      progress: `${0}%`
    }

  /**
   * @description update facility state
   *
   * @param {any} event
   *
   * @memberof AddCenter
   *
   * @returns {void}
   */
  onClick = () => {
    this.setState({
      facility: this.state.facility.concat([this.state.values])
    });
    this.setState({ values: '' });
  }

  /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof AddCenter
   *
   * @returns {void}
   */
   onChange = (e) => {
     this.setState({ [e.target.name]: e.target.value });
   }

  /**
   * @description vaildate data in state and upload the image
   * sends state to api with action dispatch
   * @param {any} event
   *
   * @memberof AddCenter
   *
   * @returns {void}
   */
   onSubmit = (e) => {
     e.preventDefault();
     if (this.state.name === '') {
       toast.error('Center Name cannot be blank');
     } else if (this.state.date === '') {
       toast.error('Center city cannot be blank');
     } else if (this.state.time === '') {
       toast.error('Center Address cannot be blank');
     } else if (this.state.image === '') {
       toast.error('Add an image');
     } else if (this.state.about === '') {
       toast.error('Add about');
     } else if (this.state.purpose === '') {
       toast.error('Center Availability must be set');
     } else if (this.state.facility.length < 1) {
       toast.error('Center facility must be set');
     } else {
       const fd = new FormData();
       const id = `${Date.now()}-${this.state.image.name}`;
       fd.append('file', this.state.image);
       fd.append('public_id', id);
       fd.append('upload_preset', 'eventmanager');
       console.log(fd)
       axios
         .post(
           'https://api.cloudinary.com/v1_1/skybound/image/upload',
           fd, {
             onUploadProgress: (progressEvent) => {
               const level = `${Math.round(progressEvent.loaded /
                progressEvent.total * 100)}%`;
               this.setState({ progress: level });
             }
           }
         )
         .then((response) => {
           this.setState({
             imageurl: response.data.secure_url,
             publicUrlId: response.data.public_id,
             image: null,
             preview: null
           });
           this.props.initPostCenters(
             this.state,
             this.props.history
           );
         })
         .catch((err) => {
           toast.error('Unable to upload. Check your internet');
         });
     }
   }

   /**
   * @description prefent the enter key from submitting the form
   *
   * @param {any} event
   *
   * @memberof AddCenter
   *
   * @returns {void}
   */
   onKeyPress = (e) => {
     if (e.target.type !== 'textarea' && e.which === 13 /* Enter */) {
       e.preventDefault();
     }
   }

  /**
   * @description upload image and return url
   * sends set state to image url
   * @param {any} event
   *
   * @memberof AddCenter
   *
   * @returns {void}
   */
    handleImageChange = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          image: file,
          preview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }


  /**
   * @description remove add Facility
   *
   * @param {any} event
   *
   * @memberof AddCenter
   *
   * @returns {void}
   */
    removeFacility = (i) => {
      const array = this.state.facility;
      array.splice(i, 1);
      this.setState({ facility: array });
    }

    /**
   * @description renders component to the DOM
   *
   * @memberof AddCenter
   *
   * @returns {JSX} JSX representation of component
   */
    render() {
      const { preview } = this.state;
      let imagePreview = null;
      if (preview) {
        imagePreview = (<img
          src={preview}
          alt="ImagePreview"
          className="imgPre"
        />);
      }

      return (
        <div>
          <div className="container" style={{ paddingTop: '100px' }}>
            <div className="card card w-50 loginCard ">
              <div className="card-header dark">
                <h1 className="color">Add Center</h1>
              </div>
              <CenterFrom
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                centerName={this.state.name}
                city={this.state.city}
                address={this.state.address}
                availability={this.state.availability}
                values={this.state.values}
                handleImageChange={this.handleImageChange}
                onClick={this.onClick}
                removeFacility={this.removeFacility}
                facility={this.state.facility}
                imagePreview={imagePreview}
                about={this.state.about}
                disabled={this.state.values}
                progress={this.state.progress}
                onKeyPress={this.onKeyPress}
              />
            </div>
          </div>
        </div>
      );
    }
}

AddCenter.propTypes = {
  initPostCenters: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = dispatch => ({
  initPostCenters: (input, history) =>
    dispatch(action.initPostCenters(input, history)),
});

export default connect(null, mapDispatchToProps)(AddCenter);
