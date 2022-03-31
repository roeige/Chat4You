import { Fragment } from "react";
import React from "react";
import { Dropdown } from "react-bootstrap";
import UploadModal from "./UploadModal";
import ChooseFile from "./ChooseFile";
const UploadPhoto = props => {
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    return (
        <Fragment>
            <Dropdown.Item onClick={handleShow} eventKey="1" className="col"><i class="bi bi-image"></i></Dropdown.Item>
            <UploadModal
                modalContent={<ChooseFile />}
                name={"Upload Photo"}
                show={modalShow}
                onHide={handleClose}
                
            />
        </Fragment>
    )
};
export default UploadPhoto;