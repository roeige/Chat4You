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
import { messages } from '../BubbleMessage/chat_data';

const MainUploadButton = props => {

    const [selectedFile, setSelectedFile] = useState();
    const [fileType, setFileType] = useState(null);

    const audioRecord = (event) => {
        {/**The event we get is actually an audio file */ }
        console.log("In Record event");
        console.log(event);
        //setSelectedFile(event);
    }

    const changeHandlerAudio = audio =>{
        console.log("Success file audio")
        setSelectedFile(audio);
    }

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    
    };

    const handleSubmission = () => {
        createMessage();
    };

    const createMessage = () => {
        {/**It will create a message according to the data it gets from upload choice */ }
        const date = new Date;
        const time = date.getHours() + ":" + date.getMinutes();
        const newMessage = { type: fileType, from: "me", time, content: URL.createObjectURL(selectedFile) };
        
        console.log(props.contactsChats[0],props.contactsChats[1],props.index)
        const newMessagesData = [...props.contactsChats[props.index].messagesData, newMessage];
        const newContact = {...props.contactsChats[props.index],messagesData : newMessagesData};
        let contactsChatsCopy = [...props.contactsChats];
        contactsChatsCopy.splice(props.index,1);
        console.log(contactsChatsCopy)
        contactsChatsCopy.push(newContact);
        props.setContactsChats(contactsChatsCopy)
        props.setActiveContactIndex(contactsChatsCopy.length-1)
        {/**for now we support only in 3 type of messages from special share option. */ }
    }

    return (
        <DropdownButton 
            title={<i class="bi bi-paperclip"></i>}
            drop="up"
            variant="outline-secondary" className="col-1 p-0" onClick={() => { console.log("Hi") }}>
            {/**Need to change display to fles, the dropdown buttons display */}
            {/**Enter each modal buttons one by one, using components */}
            <PhotoUpload changeHandler={changeHandler} handleSubmission={handleSubmission} setFileType={setFileType} />
            <VideoUpload changeHandler={changeHandler} handleSubmission={handleSubmission} setFileType={setFileType} />
            <RecordUpload changeHandler={changeHandlerAudio} handleSubmission={handleSubmission} setFileType={setFileType} />
            <LocationUpload />
        </DropdownButton>
    );
};
export default MainUploadButton;