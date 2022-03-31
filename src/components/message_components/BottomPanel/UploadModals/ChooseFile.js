import { useState } from "react";
import { Form } from "react-bootstrap";
const ChooseFile = props => {
    const [selectedFile, setSelectedFile] = useState();
    const [isPhoto, setIsPhoto] = useState(false);
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
        </Form.Group>
    );
};

export default ChooseFile;