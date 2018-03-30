import React, { Component } from 'react';
import toast from 'toastr';
import axios from 'axios';
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
      image: '',
      preview: this.props.loadedCenter.imageurl,
      imageurl: this.props.loadedCenter.imageurl,
      publicUrlId: this.props.loadedCenter.imageId,
      progress: `${0}%`
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
     } else if (this.state.address === '') {
       toast.error('Center Address cannot be blank');
     } else if (this.state.availability === '') {
       toast.error('Center Availability must be set');
     } else {
       const fd = new FormData();
       const id = `${Date.now()}-${this.state.image.name}`;
       fd.append('file', this.state.image);
       fd.append('public_id', id);
       fd.append('upload_preset', 'eventmanager');
       if (this.state.image === '') {
         this.props.initEditCenter(
           this.props.match.params.id,
           this.state, this.props.history
         );
       } else {
         axios.post('https://api.cloudinary.com/v1_1/skybound/image/upload', fd, {
           onUploadProgress: (progressEvent) => {
             const level = `${Math.round(progressEvent.loaded / progressEvent.total * 100)}%`;
             this.setState({ progress: level });
           }
         })
           .then((response) => {
             this.setState({
               imageurl: response.data.secure_url,
               publicUrlId: response.data.public_id,
               image: null,
               preview: null
             });
             this.props.initEditCenter(
               this.props.match.params.id,
               this.state, this.props.history
             );
           })
           .catch((err) => {
             toast.error('Unable to upload. Check your internet');
           });
       }
     }
   }

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

    removeFacility = (i) => {
      const array = this.state.facility;
      array.splice(i, 1);
      this.setState({ facility: array });
    }


    render() {
      const { preview } = this.state;
      let imagePreview = null;
      if (preview) {
        imagePreview = (<img src={preview} alt="ImagePreview" className="imgPre" />);
      }

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
              handleImageChange={this.handleImageChange}
              onClick={this.onClick}
              removeFacility={this.removeFacility}
              facility={this.state.facility}
              imagePreview={imagePreview}
              disabled={this.state.values}
              progress={this.state.progress}
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
