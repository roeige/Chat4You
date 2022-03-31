import { Fragment } from "react";
import RecordUpload from "./RecordUpload";
import { Modal, Button } from "react-bootstrap";
import './Upload.css';
const RecordModal = props => {
    const Recording = () => {
        console.log("type of record is:" + props.type);
        props.setFileType(props.type);
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            {/**Create stop button and add option to stop. */ }
            {/**<Button className="recordButton" onClick={()=>{mediaRecorder.stop}} type="submit center"><i class="bi bi-stop-circle-fill"></i></Button>
        */}
            const audioChunks = [];
            mediaRecorder.addEventListener("dataavalibale", event => {
                audioChunks.push(event.data);
            });
            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                console.log("audioBlob is: " + audioBlob);
                const audioUrl = URL.createObjectURL(audioBlob);
                {/**audio is what we return as file */ }
                const audio = new Audio(audioUrl);
                props.changeHandler(audio);
            });
            setTimeout(() => {
                mediaRecorder.stop();
            }, 300);
        });
    };
    return (
        <Button className="recordButton" onClick={Recording} type="submit center"><i class="bi bi-record-circle"></i></Button>
    );
};
export default RecordModal;