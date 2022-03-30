const ContactList = (props) => {
  return (
    <li className="p-2 list-group-item d-flex justify-content-between align-items-start">
      <div> {props.picture} </div>
      <div className="ms-2 me-auto">
        <div className="fw-bold"> {props.name} </div>
        {props.lastMessage}{" "}
      </div>
      <span className="badge bg-dark rounded-pill">
        {" "}
        {props.timeAgo + " minute ago"}{" "}
      </span>
    </li>
  );
};

export default ContactList;
