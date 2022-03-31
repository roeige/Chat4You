import { Modal,Button } from "react-bootstrap";
import { FloatingLabel,Form } from "react-bootstrap";


const AddNewContact = props =>{
    return (
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add new contact</Modal.Title>
        </Modal.Header>
          <Modal.Body><FloatingLabel controlId="floatingContact" label="Contact's identifier">
          <Form.Control type="contact" placeholder="contact" />
        </FloatingLabel></Modal.Body>
          <Modal.Footer>
    <Button variant="primary">Add</Button>
  </Modal.Footer>
        </Modal>
    );
};

export default AddNewContact;