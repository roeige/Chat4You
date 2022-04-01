import React, { Fragment } from 'react';
import { InputGroup,FormControl,Button } from 'react-bootstrap';
import MainUploadButton from './MainUploadButton';
import './BottomPanel.css';
const shareIcon = <svg xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-paperclip"
    viewBox="0 0 16 16" >
    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
</svg>
const MessageSender = (props) => {
    return (
        <InputGroup id="bottomPanel" className="mb-3">
        <MainUploadButton index = {props.index} messagesData = {props.messagesData} setMessagesData = {props.setMessagesData} contactsChats = {props.contactsChats} setContactsChats = {props.setContactsChats} setActiveContactIndex={props.setActiveContactIndex}/>
        <FormControl
          placeholder="New message here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Send
        </Button>
      </InputGroup>
    
    );
};
export default MessageSender;