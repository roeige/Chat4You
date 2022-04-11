import { useEffect,useState } from "react";
import './Chat.css'
const ContactList = (props) => {
  const[activeState,setActiveState] = useState("")
  useEffect(() => {
    if (props.activeContactIndex === props.id) {
      setActiveState(" act")
    }
    else setActiveState("")
  }, [props.activeContactIndex,props.id]);

  const clickHandler = () => {
    props.setActiveContactIndex(props.id);
  };

  

  return (
    <li
      className={
        "p-2 list-group-item d-flex justify-content-between align-items-start hover-shadow contact-itm" +
        activeState
      }
      onClick={clickHandler}
    >
      <div className = "left-contact-img"><img src={props.picture} className="img-fluid rounded-circle"/></div>
      <div className="ms-2 me-auto">
        <div className="fw-bold contact-text"> {props.name} </div>
        {props.lastMessage}
      </div>
      <span className="badge bg-dark rounded-pill">
        
        {props.timeAgo}
      </span>
    </li>
  );
};

export default ContactList;
