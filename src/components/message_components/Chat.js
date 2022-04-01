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
  contacts,
  defaultPicture,
  getLastMessage,
} from "./BubbleMessage/chat_data";
import { useEffect } from "react";

const Chat = (props) => {
  const [messagesData, setMessagesData] = useState([]);
  const [contactsChats, setContactsChats] = useState(contacts);
  const [activeContactIndex, setActiveContactIndex] = useState(null);
  console.log(contactsChats)

  useEffect(() => {
    console.log(contactsChats[activeContactIndex])
    if (activeContactIndex != null) {
      setMessagesData(
        contactsChats[activeContactIndex].messagesData
      );
    }
  }, [activeContactIndex,contactsChats]);

  const handleAddingContact = (contactName) => {
    console.log(contactName);
    const newContact = {
      name: contactName,
      messagesData: [],
      get lastMessage() {
        return getLastMessage(this.messagesData);
      },
      timeAgo: 60,
      picture: defaultPicture,
    };
    setContactsChats([...contactsChats, newContact]);
    setActiveContactIndex(contactsChats.length)
  };

  return (
    <Fragment>
      <div className="container grid grid-background chat-background">
        <div class="row row-eq-height upper-bar">
          <Col xs={4}>
            <Row>
              <TopBarLeft handleAddingContact={handleAddingContact} />
            </Row>
          </Col>
          <Col xs={8}>
            <Row>
              <TopBarRight />
            </Row>
          </Col>
        </div>
        <Row className="lower-row">
          <Col>
            <div className="col grid-background">
              <ol className="flex-col d-flex list-group contact-list">
                {contactsChats
                  .slice(0)
                  .reverse()
                  .map((chat, index) => {
                    return (
                      <ContactList
                        name={chat.name}
                        lastMessage={chat.lastMessage}
                        timeAgo={chat.timeAgo}
                        picture={chat.picture}
                        key={index}
                        id = {contactsChats.length-1-index}
                        activeContactIndex={activeContactIndex}
                        setActiveContactIndex={setActiveContactIndex}
                      />
                    );
                  })}
              </ol>
            </div>
          </Col>
          <Col xs={8} className="container-relative">
            <MessagesBox messagesData={messagesData} />
            <Row>
              <MessageSender
                messagesData={messagesData}
                setMessagesData={setMessagesData}
                contactsChats = {contactsChats}
                setContactsChats = {setContactsChats}
                index = {activeContactIndex}
                setActiveContactIndex={setActiveContactIndex}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default Chat;
