import { useEffect,useState } from "react";
import './Chat.css'
const ContactList = (props) => {
  const[activeState,setActiveState] = useState("")
  useEffect(() => {
    if (props.activeContactIndex === props.id) {
      setActiveState(" active")
    }
    else setActiveState("")
  }, [props.activeContactIndex,props.id]);

  const clickHandler = () => {
    props.setActiveContactIndex(props.id);
  };

  

  return (
    <li
      className={
        "p-2 list-group-item d-flex justify-content-between align-items-start hover-shadow" +
        activeState
      }
      onClick={clickHandler}
    >
      <div class = "left-contact-img"><img src={props.picture} class="img-fluid rounded"/></div>
      <div className="ms-2 me-auto">
        <div className="fw-bold"> {props.name} </div>
        {props.lastMessage}
      </div>
      <span className="badge bg-dark rounded-pill">
        
        {props.timeAgo}
      </span>
    </li>
  );
};

export default ContactList;
