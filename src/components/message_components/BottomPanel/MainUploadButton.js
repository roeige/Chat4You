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
import { getLastMessage,app_data } from '../chat_utils'

const MainUploadButton = props => {
    const user = props.user;
    const [selectedFile, setSelectedFile] = useState();
    const [fileType, setFileType] = useState(null);

    const audioRecord = (event) => {
        //The event we get is actually an audio file
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
        const date = new Date();
        const newMessage = { type: fileType, from: "me", date, content: URL.createObjectURL(selectedFile) };
        app_data[user].contacts[props.index].messages.push(newMessage);
        const targetContact = app_data[user].contacts[props.index];
        app_data[user].contacts.sort((x,y) => {return x==targetContact ? 1 : y==targetContact ? -1 : 0;})
        console.log(app_data[user].contacts)
        const otherUser = app_data[user].contacts[app_data[user].contacts.length-1].username;
        app_data[otherUser].contacts.forEach((contact,index) => {
            if(contact.username===user){
                contact.messages.push({...newMessage,from : "you"});
                app_data[otherUser].contacts.sort((x,y) => {return x==contact ? 1 : y==contact ? -1 : 0;})
            }
        })
        props.setActiveContactIndex(app_data[user].contacts.length-1)
        props.setContacts([...app_data[user].contacts]);
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