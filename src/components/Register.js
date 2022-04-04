import { useRef,useState } from "react";
import "./Connect.css";
import { users } from "../user_details";
import { app_data } from "./message_components/chat_utils";
import avatar from "../pictures/avatar.png";
import { Col,Row } from "react-bootstrap";
import { FloatingLabel,Form } from "react-bootstrap";

const Register = (props) => {
  const usernameRef = useRef();
  const displayNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [picture,setPicture] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const displayName = displayNameRef.current.value;
    const userPicture = picture ? picture : avatar;
    if (app_data && app_data[username]) {
      alert("Username already in use, please type another username")
    } else {
      app_data[username] = {
        password,
        displayName,
        picture: userPicture,
        contacts: {},
      };
      console.log(app_data);
    }
  };

  const onPictureUpload = event => {
      setPicture(event.target.files[0]);
  }

  return (
    <div class="grid form-register" >
      <div class="col">
        <div class="row justify-content-md-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
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
        <div class="row mb icon">
          <p class="text-center fs-3">Register</p>
        </div>
        <>


            
            <FloatingLabel className = "mb-3"  controlId="username" label="Username">
          <Form.Control type="username" placeholder="username" ref={usernameRef}/>
        </FloatingLabel>

        <FloatingLabel className = "mb-3"  controlId="displayName" label="Display name">
          <Form.Control type="displayName" placeholder="displayName" ref={displayNameRef}/>
        </FloatingLabel>

        

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload profile picture</Form.Label>
        <Form.Control type="file" onChange={onPictureUpload}/>
      </Form.Group>
            
            

            <FloatingLabel className = "mb-3"  controlId="password" label="Password">
          <Form.Control type="password" placeholder="password" ref={passwordRef}/>
        </FloatingLabel>

        <FloatingLabel className = "mb-3"  controlId="passwordValidation" label="Confirm password">
          <Form.Control type="password" placeholder="passwordVal" ref={passwordRef}/>
        </FloatingLabel>

            </>
          <div class="row g-3 align-items-center padding">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={submitHandler}
            >
              Sign up
            </button>
          </div>
          <div class="row g-3 align-items-center">
            <p>
              &nbsp;&nbsp;Already registered?&nbsp;
              <a href="/login" class="link-primary">
                Click here
              </a>{" "}
              to login
            </p>
          </div>
      </div>
    </div>
  );
};
export default Register;
