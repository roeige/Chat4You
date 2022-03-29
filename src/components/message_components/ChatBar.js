



const ChatBar = (props) => {
  return (
    <div class="row border rounded-3 message-bar">
      <div class="col-1 person-icon">
        {props.picture}
      </div>
      <div class="col">
        <p className="text-message-sender"> {props.name} </p>
        <p className="text-bar-message"> {props.lastMessage } </p>
      </div>
      <div class="col-3 time-ago-text">
        <p>
            {props.timeAgo+ " minute ago"}
        </p>
      </div>
    </div>
    
    
  );
};

export default ChatBar;
