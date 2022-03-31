import ChooseFile from "./ChooseFile";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
const createMessage = props => {
    if (props.modalType === 'photo') {
        {/**Create new photo message, and on click will send it */}
    }
    else if(props.modalType==='video'){
        {/**Create new Video.... */}
    }
    else if(props.modalType==='record'){
        {/**... */}
    }
    {/**for now we support only in 3 type of messages from special share option. */}
}
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
                <Button onClick={props.onHide}>Upload</Button>
            </Modal.Footer>
        </Modal>

    );

};


export default UploadModal;