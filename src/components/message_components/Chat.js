
import { Row,Container,Col } from "react-bootstrap";
import ChatMessage from "./ChatMessage";
import "./Chat.css";
import "../Connect.css";
import ContactList from './ContactList.js'

const defaultPicture = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-person-circle"
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
  ];

const Chat = props => {
    return (
        <div class="container " className="grid grid-background chat-background background-app">
        <Container>
        <Row>
          <Col>      <div >
          <div class="row">
            <div class="col-1 person-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
            <div class="col">
              <p className="text"> Alice </p>
            </div>
            <div class="col-1 add-person-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </div>
          </div>
          <ol className="flex-col d-flex list-group contact-list">
          {chats.map(chat => {
            return <ContactList name={chat.name} lastMessage={chat.lastMessage} timeAgo={chat.timeAgo} picture={chat.picture} />
          })}
        </ol>
        </div></Col>
          <Col xs={8}><ChatMessage /></Col>
        </Row>
      </Container>
        </div>
    );
}

export default Chat;