import { useRef, useState } from 'react';
import './Connect.css'
import { users } from '../user_details';
import { app_data } from './message_components/chat_utils';
import avatar from '../pictures/avatar.png';

const Register = (props) => {
    const usernameRef = useRef();
    const displayNameRef = useRef();
    const passwordRef = useRef();
    const [feedback, setFeedback] = useState("");
    const [valid, setValid] = useState("");
    const [passFeedback, setPassFeedback] = useState("");
    const [passValid, setPassValid] = useState("");
    const [nickFeedback, setNickFeedback] = useState("");
    const [nickValid, setNickValid] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const displayName = displayNameRef.current.value;
        //first after every click fresh all fields.
        setFeedback("");
        setValid("");
        setNickFeedback("");
        setNickValid("");
        setPassValid("");
        setPassFeedback("");
        //flag to check if one of the statments fails --> we dont want to send and make new user.
        let flag = true;
        if (!username) {
            setFeedback("Please choose a username");
            setValid("invalid");
        }
        if (app_data && app_data[username]) {
            flag = false;
            console.log("Username already in use")
            setFeedback("Username already in use");
            setValid("invalid");
        }
        if (!password) {
            flag = false;
            setPassValid("invalid");
            setPassFeedback("Please choose a password");
        }
        if (!displayName) {
            flag = false;
            setNickFeedback("Please choose a nickname");
            setNickValid("invalid");
        }
        if (flag) {
            //set all fields to be valids.
            setValid("valid");
            setPassValid("valid");
            setNickValid("valid");
            app_data[username] = {
                password,
                displayName,
                picture: avatar,
                contacts: {

                }
            };
            console.log(app_data);
        }
    }

    return (<div id="enter" className="grid" >
        <div className="col">
            <div className="row justify-content-md-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </div>
            <div className="row mb icon">
                <p className="text-center fs-3">Register</p>
            </div>
            <form>

                <div className="row g-3 align-items-center">
                    <div className="col padding">
                        <label for="inputusername" className="col-form-label">User Name</label>
                    </div>
                    <div className="col-auto">
                        <input type="username" className={" form-control is-" + valid} id="inputusername" ref={usernameRef} />
                        <small className={valid + "-feedback m-0"}>{feedback}</small>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col padding">
                        <label for="inputPassword3" className="col-form-label">Password</label>
                    </div>
                    <div className="col-auto">
                        <input ref={passwordRef} type="password" className={" form-control is-" + passValid} id="inputPassword3" />
                        <small className={passValid + "-feedback m-0"}>{passFeedback}</small>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col padding">
                        <label for="input-display-name" className="col-form-label">Display name</label>
                    </div>
                    <div className="col-auto">
                        <input ref={displayNameRef} type="display-name" className={" form-control is-" + nickValid} id="display-name" />
                        <small className={nickValid + "-feedback m-0"}>{nickFeedback}</small>
                    </div>
                </div>
                <div className="row g-3 align-items-center padding"><button type="submit" className="btn btn-primary" onClick={submitHandler}>Sign up</button></div>
                <div className="row g-3 align-items-center"><p>&nbsp;&nbsp;Already registered?&nbsp;
                    <a href="/login" className="link-primary">Click here</a> to login</p></div>
            </form>
        </div>
    </div>);


}
export default Register;