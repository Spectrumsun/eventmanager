import React from 'react'

const display = (props) => (
           <div onClick={props.clicked} className="card d-lg-inline-block" style={{ width: '20rem' }}>
             <div className="card-body">
               <h4 className="card-title">{props.centerName}</h4>
               <h6 className="card-subtitle mb-2 text-muted">{props.address}</h6>
               <a  className="card-link">View More</a>
             </div>
           </div>
       );


export default display;
