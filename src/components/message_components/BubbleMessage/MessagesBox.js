import TextMessage from './TextMessage'
import VoiceMessage from './VoiceMessage'
import ImageMessage from './ImageMessage'
import VideoMessage from './VideoMessage'
import ChatMessage from '../ChatMessage'
import MessageSender from '../BottomPanel/MessageSender'



const MessagesBox = props => {

    const messages = props.messagesData;
    console.log(messages)
    
    return (<div class="col-12 container-end">
        <div class="col message-scroll ">
            {props.messagesData.slice(0).reverse().map((message) => {
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

export default MessagesBox;