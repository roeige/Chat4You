import "./Chat.css";
import france1 from "../../pictures/france1.jpg";
import TextMessage from "./TextMessage";
import ImageMessage from "./ImageMessage";
import waterfall from "../../videos/waterfall.mp4";
import VideoMessage from "./VideoMessage";
import audio from "../../audio/audio.mp3"
import VoiceMessage from "./VoiceMessage";
import { Row } from "react-bootstrap";

const arr = [
  
  { type: "text", from: "you", time: "10:00", content: "Hello" },
  { type: "text", from: "me", time: "10:01", content: "Hello" },
  { type: "text", from: "me", time: "10:02", content: "Hellodsadasdasdas" },
  { type: "image", from: "you", time: "10:00", content: france1 },
  { type: "voice", from: "you", time: "10:00", content: audio },
  { type: "video", from: "you", time: "10:00", content: waterfall },
];
  const ChatMessage = (props) => {
    return (
      <div className="chats">
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
        </div>
        <div class="container-end">
          <div class="col message-scroll ">
            {arr.map((message) => {
              if (message.type == "text")
                return (
                  <div class="row">
                    <TextMessage
                      from={message.from}
                      time={message.time}
                      text={message.content}
                    />
                  </div>
                );
              else if (message.type == "image")
                return (
                  <div class="row">
                    <ImageMessage
                      from={message.from}
                      time={message.time}
                      image={message.content}
                    />
                  </div>
                );
              else if (message.type == "video")
                return (
                  <div class="row">
                    <VideoMessage
                      from={message.from}
                      time={message.time}
                      video={message.content}
                    />
                  </div>
                );
                else if (message.type == "voice")
                return (
                  <div class="row">
                    <VoiceMessage
                      from={message.from}
                      time={message.time}
                      audio={message.content}
                    />
                  </div>
                );
            })}
          </div>
          
                
            
        
      </div>
    </div>
  );
};

export default ChatMessage;
