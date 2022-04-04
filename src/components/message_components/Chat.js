import { Row, Col } from "react-bootstrap";
import "./Chat.css";
import "../Connect.css";
import ContactList from "./ContactList";
import MessagesBox from "./BubbleMessage/MessagesBox";
import MessageSender from "./BottomPanel/MessageSender";
import { Fragment, useState } from "react";


import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";
import {
  getLastMessage,
  getTimeAgo,
  app_data,
  isInContacts
} from "./chat_utils";
import { useEffect } from "react";
import avatar from "../../pictures/avatar.png";

const Chat = (props) => {
  console.log(app_data)
  const user = props.user;
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState(app_data[user].contacts);
  const [activeContactIndex, setActiveContactIndex] = useState(null);
  const showContactChat = activeContactIndex === null ? false : true;

  useEffect(() => {
    if (activeContactIndex != null) {
      setMessages(contacts[activeContactIndex].messages);
    }
  }, [activeContactIndex, contacts]);

  const handleAddingContact = (username) => {
    console.log(username)
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
      picture: avatar,
    };
    app_data["oriel"].contacts.push(newContact);
    setContacts([...app_data["oriel"].contacts]);
    setActiveContactIndex(app_data["oriel"].contacts.length - 1);
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
      <div className="container grid grid-background chat-background">
        <div class="row row-eq-height upper-bar">
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
            <div className="col grid-background">
              <ol className="flex-col d-flex list-group contact-list">
                {contacts
                  .slice(0)
                  .reverse()
                  .map((chat, index) => {
                    return (
                      <ContactList
                        name={chat.displayName}
                        lastMessage={getLastMessage(chat.messages)}
                        timeAgo={getTimeAgo(chat.messages)}
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
                <MessagesBox messages={messages} />
                <Row>
                  <MessageSender
                    messages={messages}
                    setMessages={setMessages}
                    contacts={contacts}
                    setContacts={setContacts}
                    index={activeContactIndex}
                    setActiveContactIndex={setActiveContactIndex}
                    user={user}
                  />
                </Row>
              </Fragment>
            )}
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default Chat;
