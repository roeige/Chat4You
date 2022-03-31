import { Fragment } from "react";
import RecordUpload from "./RecordUpload";
import { Modal, Button } from "react-bootstrap";
import './Upload.css';
const RecordModal = props => {

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
              let testAudioRecord = URL.createObjectURL(blob);
              console.log(testAudioRecord);
              props.changeHandler(testAudioRecord)
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
        <Button className="recordButton" onClick={Recording} type="submit center"><i class="bi bi-record-circle"></i></Button>
    );
};
export default RecordModal;