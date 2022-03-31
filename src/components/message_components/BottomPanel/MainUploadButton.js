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
const MainUploadButton = props =>{
    return(
        <DropdownButton
        title= {<i class="bi bi-paperclip"></i>}
        drop="up"
        variant="" className="col-1 p-0" onClick={() => { console.log("Hi") }}>
        {/**Enter each modal buttons one by one, using components */}
        <PhotoUpload />
        <VideoUpload />
        <RecordUpload />
        <LocationUpload/>
    </DropdownButton>
    );
};
export default MainUploadButton;