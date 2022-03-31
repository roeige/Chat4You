import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton'
import DropdownButton from 'react-bootstrap/DropdownButton'
import PhotoModal from './UploadModals/UploadModal';
import VideoUpload from './UploadModals/VideoUpload';
import PhotoUpload from './UploadModals/PhotoUpload';
import RecordUpload from './UploadModals/RecordUpload';
import PhotoVidModal from './UploadModals/UploadModal';
import ChooseFile from './UploadModals/ChooseFile';
import LocationUpload from './UploadModals/LocationUpload';
import { useState } from 'react';
import { messages } from '../BubbleMessage/messages_data';

const MainUploadButton = props => {

    const [selectedFile, setSelectedFile] = useState();
    const [fileType,setFileType] = useState(null);

	const changeHandler = (event) => {
        
		setSelectedFile(event.target.files[0]);
        console.log("select");
	};

	const handleSubmission = () => {
        console.log(selectedFile);
        createMessage();
	};

    const createMessage = () => {
        if (fileType === 'image') {
            {/**Create new photo message, and on click will send it */}
            let newMessagesData = props.messagesData;
            
            
            newMessagesData.push({type : fileType, from : "me", time : "10:00", content : selectedFile});
            props.setMessagesData(newMessagesData)
            console.log(props.messagesData)

        }
        else if(fileType==='video'){
            {/**Create new Video.... */}
        }
        else if(fileType==='record'){
            {/**... */}
        }
        {/**for now we support only in 3 type of messages from special share option. */}
    }

    return (
        <DropdownButton
            title={<i class="bi bi-paperclip"></i>}
            drop="up"
            variant="" className="col-1 p-0" onClick={() => { console.log("Hi") }}>
            {/**Need to change display to fles, the dropdown buttons display */}
            {/**Enter each modal buttons one by one, using components */}
            <PhotoUpload changeHandler = {changeHandler} handleSubmission = {handleSubmission} setFileType = {setFileType}/>
            <VideoUpload changeHandler = {changeHandler} handleSubmission = {handleSubmission} setFileType = {setFileType}/>
            <RecordUpload />
            <LocationUpload />
        </DropdownButton>
    );
};
export default MainUploadButton;