import React, { Component } from 'react';

class CenterFrom extends Component {
  state = {
    centerName: '',
    city: '',
    address: '',
    availability: '',
    facility: []
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

   onSubmit = (e) => {
     e.preventDefault();
   // this.props.onUserCreate(this.state);
   }


   render() {
     return (
       <div className="card-body">
         <form onSubmit={this.onSubmit} >
           <div className="form-row">
             <div className="form-group col-md-12">
               <h5><label htmlFor="inputEmail4">Name</label></h5>
               <input
                 type="text"
                 value={this.state.centerName}
                 onChange={this.onChange}
                 name="centerName"
                 className="form-control form-control-lg"
                 required
               />
             </div>
             <div className="form-group col-md-6">
               <h5><label htmlFor="inputPassword4">City</label></h5>
               <input
                 type="text"
                 value={this.state.city}
                 onChange={this.onChange}
                 name="city"
                 className="form-control form-control-lg"
                 required
               />
             </div>
             <div className="form-group col-md-6">
               <h5><label htmlFor="inputPassword4">Availability</label></h5>
               <input
                 type="text"
                 value={this.state.availability}
                 onChange={this.onChange}
                 name="availability"
                 className="form-control form-control-lg"
                 required
               />
             </div>
             <div className="form-group col-md-12">
               <h5><label htmlFor="inputPassword4">Address</label></h5>
               <input
                 type="text"
                 value={this.state.address}
                 onChange={this.onChange}
                 name="address"
                 className="form-control form-control-lg"
                 required
               />
             </div>
           </div>
           <h5>Add Facilities</h5>
           <input type="text" className="form-control col-md-6 form-control-lg" id="addFacility" style={{ float: 'left' }} />
           <input type="reset" value="add" id="add" className="btn btn-info btn-lg" style={{ marginLeft: '20px' }} />
           <br />
           <br />
           <ul className="list-group col-md-5" id="list" >
             <li className="list-group-item centerlist">Security</li>
           </ul>
           <br />
           <button type="submit" className="btn btn-primary btn-lg">Done</button>
           <br />
           <br />
         </form>
       </div>


     );
   }
}

export default CenterFrom;

