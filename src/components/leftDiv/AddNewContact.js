import { useRef } from "react";
import { Modal,Button } from "react-bootstrap";
import { FloatingLabel,Form } from "react-bootstrap";


const AddNewContact = props =>{
  const contactRef = useRef('');

  const handleClick = () => {
    if(props.handleAddingContact(contactRef.current.value)==false){
      contactRef.current.value = "";
      return;
    };
    props.handleClose();
  }
    return (
        <Modal size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add new contact</Modal.Title>
        </Modal.Header>
          <Modal.Body><FloatingLabel controlId="floatingContact" label="Contact's identifier">
          <Form.Control type="contact" placeholder="contact" ref={contactRef}/>
        </FloatingLabel></Modal.Body>
          <Modal.Footer>
    <Button variant="primary" onClick = {handleClick}>Add</Button>
  </Modal.Footer>
        </Modal>
    );
};

export default AddNewContact;