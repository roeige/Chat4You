import { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { FloatingLabel, Form } from "react-bootstrap";
import "./Chat.css";
import "./AddNewContact.css"

const AddNewContact = (props) => {
  const contactRef = useRef("");

  const handleClick = () => {
    if (props.handleAddingContact(contactRef.current.value) == false) {
      contactRef.current.value = "";
      return;
    }
    props.handleClose();
  };
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.handleClose}
      contentClassName = "modal-dark"
    >
    
      <Modal.Header closeButton className="modal-dark modal-header-dark">
        <Modal.Title className="modal-header-txt-dark">
          Add new contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-dark">
        <FloatingLabel controlId="floatingContact" label="Contact's identifier" className = "modal-input-dark-txt">
          <Form.Control
            type="contact"
            placeholder="contact"
            ref={contactRef}
            className="modal-input-dark  input-txt"
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer className="modal-dark modal-footer-dark">
        <Button variant="primary" onClick={handleClick}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewContact;
