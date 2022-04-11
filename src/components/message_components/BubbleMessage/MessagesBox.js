import TextMessage from "./TextMessage";
import VoiceMessage from "./VoiceMessage";
import ImageMessage from "./ImageMessage";
import VideoMessage from "./VideoMessage";
import ChatMessage from "../ChatMessage";
import MessageSender from "../BottomPanel/MessageSender";
import "../Chat.css";
import "../../Connect.css"
import { dateToTime,dateToString } from "../chat_utils"
import { Fragment } from "react";
import './MessagesBox.css'
import { Row } from "react-bootstrap";

const MessagesBox = (props) => {
  const messages = props.messages;
  const len = messages.length;
  

  return (
   
      <div className="col-12 container-end message-scroll scrollbar scrollbar-primary">
        {props.messages
          .slice(0)
          .reverse()
          .map((message, index, reversedArr) => {
            let divider = "";
            if (
              (
                index == len - 1) ||
              (index + 1 < len &&
                message.date.getDay() !==
                reversedArr[index+1].date.getDay())
            )
              divider = (
                <Row className="badge-row"><span className="badge bg-dark rounded-pill date-badge">{dateToString(message.date)}</span></Row>
              );
            if (message.type === "text")
              return (
                <Fragment key={index}>
                  <div className="row" key={index}>
                    <TextMessage
                      from={message.from}
                      time={dateToTime(message.date)}
                      text={message.content}
                      key={index}
                    />
                  </div>
                  {divider}
                </Fragment>
              );
            else if (message.type === "image")
              return (<Fragment key={index}>
                <div className="row" key={index}>
                  <ImageMessage
                    from={message.from}
                    time={dateToTime(message.date)}
                    image={message.content}
                    key={index}
                  />
                </div>{divider}
                </Fragment>
              );
            else if (message.type === "video")
              return (<Fragment key={index}>
                <div className="row" key={index}>
                  <VideoMessage
                    from={message.from}
                    time={dateToTime(message.date)}
                    video={message.content}
                    key={index}
                  />
                </div>{divider}
                </Fragment>
              );
            else if (message.type === "voice")
              return (
                  <Fragment key={index}>
                <div className="row" key={index}>
                  <VoiceMessage
                    from={message.from}
                    time={dateToTime(message.date)}
                    audio={message.content}
                    key={index}
                  />
                </div>{divider}
                </Fragment>
              );
            return null;
          })}
      </div>
    
  );
};

export default MessagesBox;
