import ChooseFile from "./ChooseFile";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const UploadModal = props => {
    const [modalType, setModalType] = useState(null);
    return (
        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Here will insert different body for each purpose (photo,record,etc..)---ChooseFile*/}
                {/*<ChooseFile/>*/}
                {props.modalContent}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleSubmission}>Upload</Button>
            </Modal.Footer>
        </Modal>

    );

};


export default UploadModal;