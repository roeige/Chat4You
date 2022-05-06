import { Row, Col ,Navbar,Container} from "react-bootstrap";
import "./Chat.css";
import "../Connect.css";
import ContactList from "./ContactList";
import MessagesBox from "./BubbleMessage/MessagesBox";
import MessageSender from "./BottomPanel/MessageSender";
import { Fragment, useState } from "react";
import Logo from "../background/Logo";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";
import {
  getLastMessage,
  getTimeAgo,
  isInContacts,
} from "./chat_utils";
import { useEffect } from "react";
import { app_data } from "../app_data";
import axios from "axios";

const Chat = (props) => {

  const user = props.user;
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  const [activeContactIndex, setActiveContactIndex] = useState(null);
  const showContactChat = activeContactIndex === null ? false : true;

  useEffect(async () => {
    axios.get("https://localhost:7019/contacts",{ withCredentials: true }).then((data) => setContacts(data.data)).catch(err => console.log(err));
  },[])

  useEffect(async () => {
    if (activeContactIndex != null) {
      const id =  contacts[activeContactIndex].id;
      axios.get(`https://localhost:7019/contacts/${id}/messages`,{ withCredentials: true }).then(data => setMessages(data.data)).catch(err => console.log(err));
    }
  }, [activeContactIndex, contacts]);

  const handleAddingContact = (username) => {
    if (app_data && !app_data[username]) {
      alert(
        "There is no user with that username, please enter a valid username to add"
      );
      return false;
    }
    if (isInContacts(username, contacts)) {
      alert("You already have this contact in your contacts list")
      return false;
    }
    const newContact = {
      username,
      displayName: app_data[username].displayName,
      messages: [],
      picture: app_data[username].picture,
    };
    app_data[user].contacts.push(newContact);
    setContacts([...app_data[user].contacts]);
    setActiveContactIndex(app_data[user].contacts.length - 1);
  };

  //refresh contacts (right side) every 30 seconds
  const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()); // default value can be anything you want

  useEffect(() => {
    setTimeout(() => {
      setFakeCurrentDate(new Date());
    }, 30000);
  }, [fakeCurrentDate]);

  return (
    <Fragment>
        <Logo/>
        <div id="outer-div">
        <div className="row row-eq-height upper-bar">
          <Col xs={4} className="padding-left-right-0">
            <Row>
              <TopBarLeft
                user={user}
                picture={app_data[user].picture}
                displayName={app_data[user].displayName}
                handleAddingContact={handleAddingContact}
              />
            </Row>
          </Col>
          <Col xs={8}>
            <Row>
              <TopBarRight
                picture={
                  activeContactIndex !== null
                    ? contacts[activeContactIndex].picture
                    : ""
                }
                displayName={
                  activeContactIndex !== null
                    ? contacts[activeContactIndex].displayName
                    : ""
                }
              />
            </Row>
          </Col>
        </div>
        <Row className="lower-row">
          <Col className="padding-left-right-0">
            <div  className="col grid-background ">
              <ol className="flex-col d-flex list-group contact-list scrollbar scrollbar-primary">
                {contacts
                  .slice(0)
                  .reverse()
                  .map((chat, index) => {
                    return (
                      <ContactList
                        name={chat.name}
                        lastMessage={chat.last}
                        timeAgo={getTimeAgo(chat.lastdate)}
                        picture={chat.picture}
                        key={index}
                        id={contacts.length - 1 - index}
                        activeContactIndex={activeContactIndex}
                        setActiveContactIndex={setActiveContactIndex}
                      />
                    );
                  })}
              </ol>
            </div>
          </Col>
          <Col xs={8} className="container-relative">
            {showContactChat && (
              <Fragment>
              <div id="messageBoxWrapper">
                <MessagesBox messages={messages} />
                </div>
                <MessageSender
                messages={messages}
                setMessages={setMessages}
                contacts={contacts}
                setContacts={setContacts}
                index={activeContactIndex}
                setActiveContactIndex={setActiveContactIndex}
                user={user}
              />
              </Fragment>
            )}
          </Col>
        </Row>
        </div>
    </Fragment>
    
  );
};
export default Chat;
