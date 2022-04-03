import React, { Fragment, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import MainUploadButton from './MainUploadButton';
import './BottomPanel.css';
import TextMessage from '../BubbleMessage/TextMessage';
import { app_data,addNewMessage } from '../chat_utils';
const shareIcon = <svg xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-paperclip"
  viewBox="0 0 16 16" >
  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
</svg>
const MessageSender = (props) => {
  const [textValue, setValue] = useState("");
  const onSubmit = () => {
    console.log("Value is :" + textValue);
    const date = new Date();
    const newMessage = { type: "text", from: "me", date, content: textValue }
    addNewMessage({newMessage,user : props.user,index : props.index, setActiveContactIndex : props.setActiveContactIndex, setContacts : props.setContacts});
    setValue("");
  }
  return (
    <InputGroup id="bottomPanel" className="mb-3">
      <MainUploadButton user={props.user} index={props.index} messagesData={props.messagesData} setMessagesData={props.setMessagesData} contacts={props.contacts} setContacts={props.setContacts} setActiveContactIndex={props.setActiveContactIndex} />
      <FormControl
        value={textValue}
        placeholder="New message here..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={e => setValue(e.target.value)}
        type="text"
      />
      <Button onClick={() => { onSubmit(); }} variant="outline-secondary" id="button-addon2">
        Send
      </Button>
    </InputGroup>

  );
};
export default MessageSender;