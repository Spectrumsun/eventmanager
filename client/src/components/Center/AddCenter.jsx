/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import PropTypes from 'prop-types';
import CenterFrom from './Form/CenterForm';
import * as action from '../../store/actions/index';
import uploadImage from './ImageUpload';
/**
 * @class AddCenter
 *
 * @extends {React.Component}
 */
export class AddCenter extends Component {
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
      progress: `${0}%`,
      formValid: false,
      errorMessage: ''
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
   onChange = (event) => {
     this.setState({ [event.target.name]: event.target.value });
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
   onSubmit = (event) => {
     event.preventDefault();
     this.setState({ formValid: false });
     if (this.state.name === '') {
       this.setState({ errorMessage: 'Center Name cannot be blank' });
     } else if (this.state.city === '') {
       this.setState({ errorMessage: 'Center city cannot be blank' });
     } else if (this.state.address === '') {
       this.setState({ errorMessage: 'Center address cannot be blank' });
     } else if (this.state.about === '') {
       this.setState({ errorMessage: 'Center about cannot be blank' });
     } else if (this.state.image === '') {
       this.setState({ errorMessage: 'Add an image' });
     } else if (this.state.about === '') {
       this.setState({ errorMessage: 'AAdd about' });
     } else if (this.state.purpose === '') {
       this.setState({ errorMessage: 'AAdd purpose' });
     } else if (this.state.Availability === '') {
       this.setState({ errorMessage: 'Center Availability must be set' });
     } else if (this.state.facility.length < 1) {
       this.setState({ errorMessage: 'Center facility must be set' });
     } else {
       const fd = new FormData();
       const id = `${Date.now()}-${this.state.image.name}`;
       this.setState({ formValid: true });
       fd.append('file', this.state.image);
       fd.append('public_id', id);
       fd.append('upload_preset', 'eventmanager');
       const fileProgress = {
         onUploadProgress: (progressEvent) => {
           const progressMeter = `${Math.round(progressEvent.loaded / progressEvent.total * 100)}%`;
           this.setState({ progress: progressMeter });
           this.setState({ errorMessage: ' ' });
         }
       };
       uploadImage(fd, fileProgress)
         .then((res) => {
           this.setState({
             imageurl: res.data.secure_url,
             publicUrlId: res.data.public_id,
             image: null,
             preview: null,
             formValid: true
           });
           this.props.initPostCenters(
             this.state,
             this.props.history
           );
         })
         .catch(() => {
           toast.error('Unable to upload. Check your internet');
           this.setState({ formValid: false });
           this.setState({ errorMessage: ' ' });
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
   onKeyPress = (event) => {
     if (event.target.type !== 'textarea' && event.which === 13 /* Enter */) {
       event.preventDefault();
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
    handleImageChange = (event) => {
      event.preventDefault();
      const reader = new FileReader();
      const file = event.target.files[0];
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
              <h5 style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                { this.state.errorMessage }
              </h5>
              <CenterFrom
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                name={this.state.name}
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
                formValid={this.state.formValid}
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

export const mapDispatchToProps = dispatch => ({
  initPostCenters: (input, history) =>
    dispatch(action.initPostCenters(input, history)),
});

export default connect(null, mapDispatchToProps)(AddCenter);
