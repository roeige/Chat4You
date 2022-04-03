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
  getTimeAgo,
} from "./chat_utils";
import { useEffect } from "react";

const Chat = (props) => {
  console.log("Refreshed");
  const [messagesData, setMessagesData] = useState([]);
  const [contactsChats, setContactsChats] = useState(contacts);
  const [activeContactIndex, setActiveContactIndex] = useState(null);
  const showContactChat = activeContactIndex === null ? false : true;


  useEffect(() => {
    console.log(contactsChats);
    if (activeContactIndex != null) {
      setMessagesData(contactsChats[activeContactIndex].messagesData);
    }
  }, [activeContactIndex, contactsChats]);

  const handleAddingContact = (contactName) => {
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
    setActiveContactIndex(contactsChats.length);
  };

  //refresh contactsChats (right side) every 1 minute
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
                        lastMessage={getLastMessage(chat.messagesData)}
                        timeAgo={getTimeAgo(chat.messagesData)}
                        picture={chat.picture}
                        key={index}
                        id={contactsChats.length - 1 - index}
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
                <MessagesBox messagesData={messagesData} />
                <Row>
                  <MessageSender
                    messagesData={messagesData}
                    setMessagesData={setMessagesData}
                    contactsChats={contactsChats}
                    setContactsChats={setContactsChats}
                    index={activeContactIndex}
                    setActiveContactIndex={setActiveContactIndex}
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
