import { Fragment } from 'react';
import './TopBarRight.css'


const TopBarRight = props =>{
  console.log(props.displayName)
    return (
      

      <div
      className={
        "p-2 d-flex justify-content-between align-items-center hover-shadow"
      }
      
    >
      <div class = "contact-img"><img src={props.picture} class="img-fluid rounded"/></div>
      <div className="ms-2 me-auto">
        <div className="fw-bold"> {props.displayName} </div>
      </div>
      
      
        
      
    </div>
    )
};

export default TopBarRight;