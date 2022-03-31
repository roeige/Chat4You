import { Fragment, useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import ChooseFile from "./ChooseFile";
import PhotoVidModal from "./UploadModal";

const VideoUpload = props => {
    const [showModal, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    return (
        <Fragment>
            <Dropdown.Item onClick={handleShow} eventKey="2" className="col"><i class="bi bi-camera-reels"></i></Dropdown.Item>
            {/**VideoModal Here */}
            <PhotoVidModal
                modalContent = {<ChooseFile/>}
                name={"Upload Video"}
                show={showModal}
                onHide={handleClose}
            />
        </Fragment>

    )
};
export default VideoUpload;