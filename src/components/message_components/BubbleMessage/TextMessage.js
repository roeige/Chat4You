import "../SingleMessage.css";

const TextMessage = (props) => {

  return (
      <div class={"chat-" + props.from}>
        <div class={"bubble " + props.from}>
          <p className = "text-msg">{props.text}</p>
          <div className="time">{props.time}</div>
        </div>
      </div>

  );
};

export default TextMessage;
