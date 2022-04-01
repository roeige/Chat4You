import TextMessage from './TextMessage'
import VoiceMessage from './VoiceMessage'
import ImageMessage from './ImageMessage'
import VideoMessage from './VideoMessage'
import ChatMessage from '../ChatMessage'
import MessageSender from '../BottomPanel/MessageSender'
import '../Chat.css'



const MessagesBox = props => {

    const messages = props.messagesData;
    
    return (<div class="col-12 container-end">
        <div class="col message-scroll ">
            {props.messagesData.slice(0).reverse().map((message,index) => {
                if (message.type === "text")
                    return (
                        <div class="row" key = {index}>
                            <TextMessage
                                from={message.from}
                                time={message.time}
                                text={message.content}
                            />
                        </div>
                    );
                else if (message.type === "image")
                    return (
                        <div class="row" key = {index}>
                            <ImageMessage
                                from={message.from}
                                time={message.time}
                                image={message.content}
                                key = {Math.random()}
                            />
                        </div>
                    );
                else if (message.type === "video")
                    return (
                        <div class="row" key = {index}>
                            <VideoMessage
                                from={message.from}
                                time={message.time}
                                video={message.content}
                                key = {Math.random()}
                            />
                        </div>
                    );
                else if (message.type === "voice")
                    return (
                        <div class="row" key = {index}>
                            <VoiceMessage
                                from={message.from}
                                time={message.time}
                                audio={message.content}
                                key = {Math.random()}
                            />
                        </div>
                    );
                    return null;
            })}
        </div>
        
    </div>);
}

export default MessagesBox;