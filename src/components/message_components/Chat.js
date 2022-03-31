
import  { Row, Container, Col } from "react-bootstrap";
import ChatMessage from "./ChatMessage";
import "./Chat.css";
import "../Connect.css";
import ContactList from "./ContactList";
import MessagesBox from "./BubbleMessage/MessagesBox";
import MessageSender from "./BottomPanel/MessageSender";
import { Button } from "react-bootstrap";
import { Fragment, useState } from "react";
import AddNewContact from "./AddNewContact";
import TopBarMessage from "./TopBarRight";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";
import { messages,contacts,defaultPicture } from "./BubbleMessage/chat_data";


const Chat = (props) => {
  const [messagesData, setMessagesData] = useState(messages);
  const [contactsChats,setContactsChats] = useState(contacts);

  const handleAddingContact = contactName =>{
    console.log(contactName);
    const newContact = {
      name: contactName,
      lastMessage: "Have you seen the news?",
      timeAgo: 1,
      picture: defaultPicture,
    };
    setContactsChats([...contactsChats,newContact ]);
  }


  return (
    <Fragment>
      <div className="container grid grid-background chat-background">
      
      <div class = "row row-eq-height upper-bar">
      <Col xs = {4}><Row><TopBarLeft handleAddingContact = {handleAddingContact}/></Row></Col>
    <Col xs = {8}><Row><TopBarRight /></Row></Col>
      </div>
      <Row className = "lower-row">
      <Col>
        <div className="col grid-background">
          
          <ol className="flex-col d-flex list-group contact-list">
            {contactsChats.slice(0).reverse().map((chat,index) => {
              return (
                <ContactList
                  name={chat.name}
                  lastMessage={chat.lastMessage}
                  timeAgo={chat.timeAgo}
                  picture={chat.picture}
                  key = {index}
                />
              );
            })}
          </ol>
        </div>
        </Col>
        <Col xs={8} className="container-relative">
        
          <MessagesBox messagesData = {messagesData}/>
          <Row>
            <MessageSender messagesData = {messagesData} setMessagesData = {setMessagesData}/>
          </Row>
          
        </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default Chat;
