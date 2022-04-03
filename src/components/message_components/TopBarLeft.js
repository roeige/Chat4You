import { Fragment } from "react";
import { Navbar, Container,Button, Col } from "react-bootstrap";
import { useState } from "react";
import AddNewContact from "./AddNewContact";
import './AddNewContact.css';
const TopBarLeft = (props) => {
    const [showNewContact, setShowNewContact] = useState(false);
    const handleClose = () => setShowNewContact(false);
    const handleShow = () => setShowNewContact(true);

  return (
    <Fragment>
    <div
      className={
        "p-2 d-flex justify-content-between align-items-start hover-shadow"
      }
      
    >
      <div class = "left-contact-img"><img src={props.picture} class="img-fluid rounded"/></div>
      <div className="ms-2 me-auto">
        <div className="fw-bold"> {props.displayName} </div>
        {"@" + props.user}
      </div>
      
      <div className="col-2 ">
      <Button className = "upper-bar-btn" variant="light" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-person-plus-fill"
          viewBox="0 0 16 16"
        >
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fill-rule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </Button>
    </div>
        
      
    </div>
      
      <AddNewContact show={showNewContact} handleClose={handleClose} handleAddingContact = {props.handleAddingContact}/></Fragment>
  );
};

export default TopBarLeft;
