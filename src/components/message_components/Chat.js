
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
import { messages } from "./BubbleMessage/messages_data";

const defaultPicture = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    className="bi bi-person-circle"
    viewBox="0 0 16 16"
  >
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path
      fill-rule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
    />
  </svg>
);

const chats = [
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  {
    name: "Charlie Baz",
    lastMessage: "Have you seen the news?",
    timeAgo: 1,
    picture: defaultPicture,
  },
  
  

];

const Chat = (props) => {
  const [messagesData, setMessagesData] = useState(messages);


  return (
    <Fragment>
      <div className="container grid grid-background chat-background">
      
      <div class = "row row-eq-height upper-bar">
      <Col xs = {4}><Row><TopBarLeft /></Row></Col>
    <Col xs = {8}><Row><TopBarRight /></Row></Col>
      </div>
      <Row className = "lower-row">
      <Col>
        <div className="col grid-background">
          
          <ol className="flex-col d-flex list-group contact-list">
            {chats.map((chat) => {
              return (
                <ContactList
                  name={chat.name}
                  lastMessage={chat.lastMessage}
                  timeAgo={chat.timeAgo}
                  picture={chat.picture}
                />
              );
            })}
          </ol>
        </div>
        </Col>
        <Col xs={8} className="container-relative">
        {/*<TopBarRight />*/}
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
