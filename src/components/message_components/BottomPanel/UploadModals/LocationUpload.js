import { Fragment } from "react";
import RecordModal from "./RecordModal";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import UploadModal from "./UploadModal";

const LocationUpload = props =>{
    const [showModal, setModalShow] = useState(false);
        const handleClose = () => setModalShow(false);
        const handleShow = () => setModalShow(true);
    return(
            <Fragment>
                <Dropdown.Item onClick={handleShow} eventKey="4" className="col"><i class="bi bi-geo-alt"></i></Dropdown.Item>
                {/**RecordModal Here */}
                <UploadModal
                    modalContent = {<RecordModal/>}
                    name={"Send Location"}
                    show={showModal}
                    onHide={handleClose}
                />
            </Fragment>
        );
};
export default LocationUpload;