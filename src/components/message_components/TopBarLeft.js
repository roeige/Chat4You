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
      <Col xs = {1} className = "person-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        </Col>
      <Col xs = {8}>
        <p className="fw-bold text"> Alice </p>
      </Col>
      <div className="col-2 add-person-icon">
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
      <AddNewContact show={showNewContact} handleClose={handleClose} handleAddingContact = {props.handleAddingContact}/>
    </Fragment>
  );
};

export default TopBarLeft;
