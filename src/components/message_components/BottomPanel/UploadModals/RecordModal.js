import { Fragment } from "react";
import RecordUpload from "./RecordUpload";
import { Modal,Button } from "react-bootstrap";
import './Upload.css';
const RecordModal=props=>{
    return(
        <Button id="recordButton" type="submit center"><i class="bi bi-record-circle"></i></Button>
    );
};
export default RecordModal;