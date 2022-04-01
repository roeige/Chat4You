import { Fragment, useState } from "react";
import RecordUpload from "./RecordUpload";
import { Modal, Button } from "react-bootstrap";
import './Upload.css';
const RecordModal = props => {
    const [showButton, setShowButton] = useState(true);
    const handleStart = () => setShowButton(true);
    const handleStop = () => setShowButton(false);

    const stopRecording = recorder => {
      recorder.stop();
    }
    
    const Recording = async () => {
        let chunks = [];
        let recorder;
        try {
          //wait for the stream promise to resolve
          let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          recorder = new MediaRecorder(stream);
          recorder.ondataavailable = (e) => {
            chunks.push(e.data);
            if (recorder.state === "inactive") {
              const blob = new Blob(chunks, { type: "audio/webm" });
              console.log(blob)
              props.setFileType("voice");
              props.changeHandler(blob)
            }
          };
          recorder.start(1000);
    
          setTimeout(() => {
            recorder.stop();
          }, 2000);

        } catch (e) {
          console.log("error getting stream", e);
        }
      };
    return (
        <Fragment>
            {showButton && <Button className="recordButton" show={showButton} onClick={()=>{handleStop();Recording();}} type="submit center"><i class="bi bi-record-circle"></i></Button>}
            {!showButton && <Button className="recordButton" onClick={() => {/**  mediaRecorder.stop() */}} type="submit center"><i class="bi bi-stop-circle-fill"></i></Button>}
        </Fragment>

    );
};
export default RecordModal;