import TextMessage from './TextMessage'
import VoiceMessage from './VoiceMessage'
import ImageMessage from './ImageMessage'
import VideoMessage from './VideoMessage'
import france1 from '../../../pictures/france1.jpg'
import audio from '../../../audio/audio.mp3'
import waterfall from '../../../videos/waterfall.mp4'
import ChatMessage from '../ChatMessage'
import MessageSender from '../BottomPanel/MessageSender'



const arr = [
  
    { type: "text", from: "you", time: "10:00", content: "Hello" },
    { type: "text", from: "me", time: "10:01", content: "Hello" },
    { type: "text", from: "me", time: "10:02", content: "Hellodsadasdasdas" },
    { type: "image", from: "you", time: "10:03", content: france1 },
    { type: "voice", from: "you", time: "10:04", content: audio },
    { type: "video", from: "you", time: "10:05", content: waterfall },
  ];

const MessagesBox = props => {
    return (<div class="col-12 container-end">
        <div class="col message-scroll ">
            {arr.slice(0).reverse().map((message) => {
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
        
    </div>);
}

export default MessagesBox