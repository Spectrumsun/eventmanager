import React, { Component } from 'react';
import PickCenter from '../../Center/PickCenter';
// import { Link } from 'react-router-dom';

class EventForm extends Component {
  state = {
    eventName: '',
    eventdate: '',
    time: '',
    purpose: '',
    centerId: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  /*  getinfo =(e) => {
    this.setState({facility: })
  } */

   onSubmit = (e) => {
     e.preventDefault();
   // this.props.onUserCreate(this.state);
   }


   render() {
     return (
       <div className="card-body" >
         <form onSubmit={this.onSubmit}>
           <div className="form-row">
             <div className="form-group col-md-6">
               <h5><label htmlFor="inputEmail4">Event Name</label></h5>
               <input
                 type="text"
                 value={this.state.eventName}
                 onChange={this.onChange}
                 name="eventName"
                 className="form-control form-control-lg"
                 required
               />
             </div>

             <div className="form-group col-md-6">
               <h5><label htmlFor="inputPassword4">Date</label></h5>
               <input
                 type="date"
                 value={this.state.eventdate}
                 onChange={this.onChange}
                 name="eventdate"
                 className="form-control form-control-lg"
                 required
               />
             </div>

             <div className="form-group col-md-6">
               <h5><label htmlFor="inputPassword4">Time</label></h5>
               <input
                 type="time"
                 value={this.state.time}
                 onChange={this.onChange}
                 name="time"
                 className="form-control form-control-lg"
                 required
               />
             </div>
           </div>

           <div className="form-group">
             <h5><label htmlFor="exampleFormControlTextarea1">purpose</label></h5>
             <textarea
               className="form-control"
               value={this.state.purpose}
               onChange={this.onChange}
               name="purpose"
               rows="3"
               placeholder="Tell people more about the event"
             />
           </div>


           <button
             type="button"
             className="btn btn-primary"
             data-toggle="modal"
             data-target=".bd-example-modal-lg"
           >
             Pick Center
           </button>

           <div
             className="modal fade bd-example-modal-lg"
             tabIndex="-1"
             role="dialog"
             aria-labelledby="myLargeModalLabel"
             aria-hidden="true"
           >

             <div className="modal-dialog modal-lg">
               <div className="modal-content">
                 <PickCenter />
                
               </div>
             </div>
           </div>
           <br />
           <br />
           <button type="submit" className="btn btn-primary btn-lg">Submit</button>
         </form>
       </div>

     );
   }
}

export default EventForm;
