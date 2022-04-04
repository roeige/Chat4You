import { useState } from "react";
import { Form } from "react-bootstrap";
const ChooseFile = props => {

    const fileUploadHandler = (event) => {
        props.setFileType(props.type);
        props.changeHandler(event);
    }
    
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" onChange={fileUploadHandler}/>
        </Form.Group>
    );
};

export default ChooseFile;