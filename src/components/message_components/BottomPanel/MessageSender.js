import React, {useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import MainUploadButton from './MainUploadButton';
import './BottomPanel.css';
import {addNewMessage } from '../chat_utils';

const MessageSender = (props) => {
  const [textValue, setValue] = useState("");

  const onSubmit = () => {
    if(textValue==="") return;
    console.log("Value is :" + textValue);
    const date = new Date();
    const newMessage = { type: "text", from: "me", date, content: textValue }
    addNewMessage({newMessage,user : props.user,index : props.index, setActiveContactIndex : props.setActiveContactIndex, setContacts : props.setContacts});
    setValue("");
  }

  const onEnterPress = event => {
    if(event.which===13) onSubmit();
  }
  
  return (
    <InputGroup>
      <MainUploadButton user={props.user} index={props.index} messagesData={props.messagesData} setMessagesData={props.setMessagesData} contacts={props.contacts} setContacts={props.setContacts} setActiveContactIndex={props.setActiveContactIndex} />
      <FormControl
        value={textValue}
        placeholder="New message here..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={e => setValue(e.target.value)}
        type="text"
        onKeyPress = {onEnterPress}
      />
      <Button onClick={() => { onSubmit(); }} variant="outline-secondary" id="button-addon2">
        Send
      </Button>
    </InputGroup>

  );
};
export default MessageSender;