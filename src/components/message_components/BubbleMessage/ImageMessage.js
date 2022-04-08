import "../SingleMessage.css";
import "../Chat.css"
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ImageMessage = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <div class={"chat-" + props.from}>
        <div class={"image bubble " + props.from}>
          <Button className = "img-msg">
            <img
              src={props.image}
              class="img-fluid rounded"
              onClick={handleShow}
            />
          </Button>
          <div className="time">{props.time}</div>
        </div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="modal-dark modal-header-dark"/>
        <Modal.Body className="modal-dark">
          <img src={props.image} class="img-fluid " />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ImageMessage;
