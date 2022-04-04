import { Fragment, useState } from "react";
import { Button,Row  } from "react-bootstrap";
import "./Upload.css";
import audio from '../../../../audio/audio.mp3'
const RecordModal = (props) => {
  const [showButton, setShowButton] = useState(true);
  const [record,setRecord] = useState(null);
  const handleStart = () => setShowButton(true);
  const handleStop = () => setShowButton(false);
  var recorder = null;

  const stopRecording = () => {
    console.log(window.recorder);
    window.recorder.stop();
    handleStart();
  };

  const Recording = async () => {
    let chunks = [];
    // let recorder;
    try {
      //wait for the stream promise to resolve
      let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recorder = new MediaRecorder(stream);
      window.recorder = recorder;
      console.log(recorder);
      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
        if (recorder.state === "inactive") {
          const blob = new Blob(chunks, { type: "audio/webm" });
          props.setFileType("voice");
          setRecord(blob);
          props.changeHandler(blob);
          stream.getTracks().forEach((t) => t.stop());
        }
      };
      recorder.start(1000);

      // setTimeout(() => {
      //   recorder.stop();
      // }, 2000);
    } catch (e) {
      console.log("error getting stream", e);
    }
  };

  console.log(record)
  const recordPreview = (
    <Fragment>
      {props.fileType === "voice" && record && (
        <Row className = "mb3" style={{"padding-top" : "2%"}}><audio controls className="audio-player">
          <source src={URL.createObjectURL(record)} type="audio/mpeg" />
        </audio></Row>
      )}
      </Fragment>
  );

  return (
    <Fragment>
      {showButton && (
        <Button
          id=""
          className="notRec recordButton"
          onClick={() => {
            handleStop();
            setRecord(null);
            Recording();
          }}
          type="submit center"
        >
          <i className="bi bi-record-circle fa-2x "></i>
        </Button>
      )}
      {recordPreview}
      {!showButton && (
        <Button
          className="Rec recordButton"
          onClick={stopRecording}
          type="submit center"
        >
          <i className="bi bi-stop-circle-fill fa-2x "></i>
        </Button>
      )}
    </Fragment>
  );
};
export default RecordModal;
